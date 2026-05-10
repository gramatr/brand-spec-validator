/**
 * Brand-spec validator orchestrator.
 *
 * Walks every layer declared in `brand.yaml`, parses each file's
 * frontmatter, and runs both per-file and cross-layer rules. Reports
 * issues via the public ValidationResult shape.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { loadBrandSpec } from './schema/load.js';
import { IssueCollector } from './result.js';
import { exists, isFile, isDir, listFiles, walkFiles, globToRegExp, patternToRegExp } from './fs-utils.js';
import { readFrontmatter, FrontmatterError } from './frontmatter.js';
import { validateFrontmatterFields } from './rules/frontmatter-fields.js';
import { validateCommonFields } from './rules/common-fields.js';
import { validateSourceAuthority } from './rules/source-authority.js';
export async function validateBrand(brandPath, options = {}) {
    const spec = await loadBrandSpec({ specPath: options.specPath });
    const collector = new IssueCollector();
    if (!(await isDir(brandPath))) {
        collector.error('brand-path', '', `brand path is not a directory: ${brandPath}`);
        return finish(brandPath, spec, collector, 0, 0);
    }
    const layerNames = Object.keys(spec.layers);
    let layersValid = 0;
    // Collect ALL .md files we visit so cross-cutting rules run on each.
    const visitedFiles = [];
    // ---- Per-layer pass ------------------------------------------------------
    for (const [layerName, layer] of Object.entries(spec.layers)) {
        const layerErrorsBefore = collector.errors.length;
        await validateLayer(layerName, layer, brandPath, spec, collector, visitedFiles);
        if (collector.errors.length === layerErrorsBefore) {
            layersValid++;
        }
    }
    // ---- Cross-layer rules ---------------------------------------------------
    await runCrossLayerRules(brandPath, spec, collector, visitedFiles, options.freshness ?? true);
    // ---- Common-field enums + source_authority on every visited file --------
    for (const f of visitedFiles) {
        validateCommonFields(f.data, f.rel, { spec, collector });
        await validateSourceAuthority(f.data, f.rel, {
            brandPath,
            collector,
            freshness: options.freshness ?? true,
        });
    }
    return finish(brandPath, spec, collector, layerNames.length, layersValid);
}
function finish(brandPath, spec, collector, layersChecked, layersValid) {
    return {
        brandPath,
        schemaVersion: spec.contract_version,
        errors: collector.errors,
        warnings: collector.warnings,
        infos: collector.infos,
        layersChecked,
        layersValid,
    };
}
async function validateLayer(layerName, layer, brandPath, _spec, collector, visited) {
    // Files (declared individually, e.g., identity.md, voice.md, vocabulary.md)
    if (layer.files) {
        for (const fileEntry of layer.files) {
            if (!fileEntry.path)
                continue;
            await validateNamedFile(layerName, fileEntry, fileEntry.path, brandPath, collector, visited);
        }
    }
    // Directories
    if (layer.directories) {
        for (const dir of layer.directories) {
            await validateDirectory(layerName, dir, brandPath, collector, visited);
        }
    }
}
async function validateNamedFile(layerName, entry, relPath, brandPath, collector, visited) {
    const abs = path.join(brandPath, relPath);
    if (!(await isFile(abs))) {
        if (entry.required) {
            collector.error(`layer:${layerName}:required-file`, relPath, `required file is missing`);
        }
        // recommended-but-missing: not an error; voice/agent-context handled by cross-layer rules
        return;
    }
    await parseAndValidateFile(layerName, entry, relPath, abs, collector, visited);
}
async function parseAndValidateFile(layerName, entry, relPath, absPath, collector, visited) {
    let data = null;
    try {
        const parsed = await readFrontmatter(absPath);
        data = parsed.data;
    }
    catch (err) {
        if (err instanceof FrontmatterError) {
            collector.error('frontmatter-parses', relPath, err.message);
            visited.push({ rel: relPath, data: null });
            return;
        }
        collector.error('file-read', relPath, `could not read file: ${err.message}`);
        return;
    }
    if (entry.frontmatter && Object.keys(entry.frontmatter).length > 0) {
        validateFrontmatterFields(data, entry.frontmatter, relPath, `layer:${layerName}:frontmatter`, collector);
    }
    visited.push({ rel: relPath, data });
}
async function validateDirectory(layerName, dir, brandPath, collector, visited) {
    const dirRel = dir.path.replace(/\/$/, '');
    const dirAbs = path.join(brandPath, dirRel);
    const dirExists = await isDir(dirAbs);
    if (!dirExists) {
        if (dir.required) {
            collector.error(`layer:${layerName}:required-dir`, dirRel + '/', `required directory is missing`);
        }
        return;
    }
    if (!dir.contents)
        return;
    for (const entry of dir.contents) {
        if (entry.path) {
            // Named file inside a directory
            const relPath = path.posix.join(dirRel, entry.path);
            const absPath = path.join(brandPath, relPath);
            // Check sub-directory case (e.g., personas/_archive/)
            if (entry.path.endsWith('/')) {
                if (entry.required && !(await isDir(absPath))) {
                    collector.error(`layer:${layerName}:required-subdir`, relPath, `required subdirectory is missing`);
                }
                continue;
            }
            if (!(await isFile(absPath))) {
                if (entry.required) {
                    collector.error(`layer:${layerName}:required-file`, relPath, `required file is missing`);
                }
                continue;
            }
            await parseAndValidateFile(layerName, entry, relPath, absPath, collector, visited);
        }
        else if (entry.pattern) {
            // Pattern-based files (e.g., for-{audience}.md)
            const re = patternToRegExp(entry.pattern);
            const matches = [];
            // Patterns may be nested (e.g., registers/{register-slug}.md)
            const patternDir = path.posix.dirname(entry.pattern);
            const searchAbs = patternDir === '.' ? dirAbs : path.join(dirAbs, patternDir);
            const fname = path.posix.basename(entry.pattern);
            const fnameRe = patternToRegExp(fname);
            const files = await listFiles(searchAbs);
            for (const f of files) {
                if (f.startsWith('_'))
                    continue; // reserved-prefix convention: skip framework/archive
                if (fnameRe.test(f)) {
                    const subRel = patternDir === '.' ? f : `${patternDir}/${f}`;
                    matches.push(subRel);
                }
            }
            // Also try recursive walk for clarity (only if patternDir is '.')
            void re;
            const required = entry.required === true;
            const min = entry.min_files ?? (required ? 1 : 0);
            if (required && matches.length < min) {
                const fullPattern = path.posix.join(dirRel, entry.pattern);
                collector.error(`layer:${layerName}:min-files`, dirRel + '/', `pattern '${fullPattern}' requires at least ${min} match(es); found ${matches.length}`);
            }
            for (const m of matches) {
                const relPath = path.posix.join(dirRel, m);
                const absPath = path.join(brandPath, relPath);
                await parseAndValidateFile(layerName, entry, relPath, absPath, collector, visited);
            }
        }
        else if (entry.glob) {
            // Glob-based files (e.g., assets/*.svg or data/*.yaml)
            const re = globToRegExp(entry.glob);
            const files = await listFiles(dirAbs);
            const matches = files.filter((f) => !f.startsWith('_') && re.test(f));
            const min = entry.min_files ?? (entry.required ? 1 : 0);
            if (entry.required && matches.length < min) {
                collector.error(`layer:${layerName}:glob-min`, dirRel + '/', `glob '${entry.glob}' requires at least ${min} match(es); found ${matches.length}`);
            }
            // For YAML files in data/, validate they parse as YAML
            if (entry.glob.includes('.yaml') || entry.glob.includes('.yml')) {
                for (const f of matches) {
                    const relPath = path.posix.join(dirRel, f);
                    const absPath = path.join(brandPath, relPath);
                    try {
                        const raw = await fs.readFile(absPath, 'utf-8');
                        YAML.parse(raw);
                    }
                    catch (err) {
                        collector.error('data-files-yaml', relPath, `not valid YAML: ${err.message}`);
                    }
                }
            }
            // For .md globs (design/*.md, etc.), parse frontmatter for visited tracking
            if (entry.glob.includes('.md')) {
                for (const f of matches) {
                    const relPath = path.posix.join(dirRel, f);
                    const absPath = path.join(brandPath, relPath);
                    await parseAndValidateFile(layerName, entry, relPath, absPath, collector, visited);
                }
            }
        }
    }
}
// ---------------------------------------------------------------------------
// Cross-layer rules
// ---------------------------------------------------------------------------
async function runCrossLayerRules(brandPath, spec, collector, visited, freshness) {
    await ruleVoiceExclusive(brandPath, collector);
    await ruleVoiceMultiRegisterIndex(brandPath, collector);
    await ruleAgentContextPriorityLayers(brandPath, spec, collector);
    await rulePromptValidatedExamples(brandPath, collector);
    await ruleUiTokensLayerOrder(brandPath, collector);
    await ruleUiTokensDependsOn(brandPath, collector);
    await ruleAllFrontmatterParses(brandPath, collector, visited);
    if (freshness) {
        await ruleFreshness(brandPath, 'proof', 180, 'proof-freshness-warn', collector);
        await ruleFreshness(brandPath, 'design', 90, 'design-specs-freshness-warn', collector);
    }
}
async function ruleVoiceExclusive(brandPath, collector) {
    const voiceMd = path.join(brandPath, 'voice.md');
    const voiceDir = path.join(brandPath, 'voice');
    const hasFile = await isFile(voiceMd);
    const hasDir = await isDir(voiceDir);
    if (!hasFile && !hasDir) {
        collector.error('voice-required', '', `voice layer missing: provide either voice.md OR a voice/ directory with voice/registers/{slug}.md files`);
        return;
    }
    if (hasFile && hasDir) {
        collector.error('voice-pattern-exclusive', '', `both voice.md and voice/ directory present; brand must use exactly one voice pattern`);
    }
}
async function ruleVoiceMultiRegisterIndex(brandPath, collector) {
    const voiceDir = path.join(brandPath, 'voice');
    if (!(await isDir(voiceDir)))
        return;
    const hasReadme = await isFile(path.join(voiceDir, 'README.md'));
    const hasIndex = await isFile(path.join(voiceDir, '_index.md'));
    if (!hasReadme && !hasIndex) {
        collector.error('voice-multi-register-index', 'voice/', `multi-register voice/ directory must contain README.md or _index.md`);
    }
    if (hasReadme && hasIndex) {
        collector.error('voice-multi-register-index', 'voice/', `voice/ must contain exactly one of README.md or _index.md, not both`);
    }
    const registersDir = path.join(voiceDir, 'registers');
    if (!(await isDir(registersDir))) {
        collector.error('voice-multi-register-index', 'voice/registers/', `voice/registers/ directory required when using multi-register pattern`);
        return;
    }
    const registerFiles = (await listFiles(registersDir)).filter((f) => f.endsWith('.md'));
    if (registerFiles.length < 1) {
        collector.error('voice-multi-register-index', 'voice/registers/', `at least one register file required under voice/registers/`);
    }
    for (const f of registerFiles) {
        const rel = `voice/registers/${f}`;
        try {
            const parsed = await readFrontmatter(path.join(registersDir, f));
            const data = parsed.data;
            if (!data || typeof data['register'] !== 'string') {
                collector.error('voice-multi-register-index', rel, `register file must have frontmatter.register populated`);
            }
            if (!data || !Array.isArray(data['applies_to']) || data['applies_to'].length === 0) {
                collector.error('voice-multi-register-index', rel, `register file must have frontmatter.applies_to populated (non-empty array)`);
            }
        }
        catch (err) {
            if (err instanceof FrontmatterError) {
                collector.error('frontmatter-parses', rel, err.message);
            }
        }
    }
}
async function ruleAgentContextPriorityLayers(brandPath, spec, collector) {
    const filePath = path.join(brandPath, 'agent-context.md');
    if (!(await isFile(filePath)))
        return;
    try {
        const parsed = await readFrontmatter(filePath);
        const data = parsed.data;
        if (!data)
            return;
        const layers = data['priority_layers'];
        if (!Array.isArray(layers))
            return;
        const validLayers = new Set(Object.keys(spec.layers));
        for (const l of layers) {
            if (typeof l !== 'string')
                continue;
            if (!validLayers.has(l)) {
                collector.error('agent-context-priority-layers-resolve', 'agent-context.md', `priority_layers entry '${l}' is not a declared layer (valid: ${[...validLayers].join(', ')})`);
            }
        }
    }
    catch {
        // FrontmatterError already reported via main pass
    }
}
async function rulePromptValidatedExamples(brandPath, collector) {
    const promptsDir = path.join(brandPath, 'prompts');
    if (!(await isDir(promptsDir)))
        return;
    const files = (await listFiles(promptsDir)).filter((f) => f.endsWith('.md') && !f.startsWith('_'));
    for (const f of files) {
        const rel = `prompts/${f}`;
        let data = null;
        try {
            const parsed = await readFrontmatter(path.join(promptsDir, f));
            data = parsed.data;
        }
        catch {
            continue;
        }
        if (!data || data['validated'] !== true)
            continue;
        const examples = data['examples'];
        if (!Array.isArray(examples) || examples.length === 0) {
            collector.error('prompt-example-when-validated', rel, `validated: true requires non-empty examples array in frontmatter`);
            continue;
        }
        for (const e of examples) {
            if (typeof e !== 'string')
                continue;
            const candidate = path.join(brandPath, e);
            if (!(await exists(candidate))) {
                collector.error('prompt-example-when-validated', rel, `examples entry '${e}' does not exist in the brand repo`);
            }
        }
    }
}
async function ruleUiTokensLayerOrder(brandPath, collector) {
    const dir = path.join(brandPath, 'ui-tokens');
    if (!(await isDir(dir)))
        return;
    const has = async (n) => isFile(path.join(dir, n));
    const hasPrim = await has('primitives.md');
    const hasSem = await has('semantic.md');
    const hasComp = await has('component.md');
    if (hasSem && !hasPrim) {
        collector.error('ui-tokens-layer-order', 'ui-tokens/semantic.md', `ui-tokens/semantic.md exists but ui-tokens/primitives.md is missing`);
    }
    if (hasComp && !hasSem) {
        collector.error('ui-tokens-layer-order', 'ui-tokens/component.md', `ui-tokens/component.md exists but ui-tokens/semantic.md is missing`);
    }
}
async function ruleUiTokensDependsOn(brandPath, collector) {
    const dir = path.join(brandPath, 'ui-tokens');
    if (!(await isDir(dir)))
        return;
    const files = (await listFiles(dir)).filter((f) => f.endsWith('.md'));
    const present = new Set(files);
    for (const f of files) {
        const rel = `ui-tokens/${f}`;
        let data = null;
        try {
            const parsed = await readFrontmatter(path.join(dir, f));
            data = parsed.data;
        }
        catch {
            continue;
        }
        if (!data)
            continue;
        // Spec uses both "depends-on" (kebab in YAML) and "depends_on" historically; accept either.
        const depsRaw = (data['depends-on'] ?? data['depends_on']);
        if (!Array.isArray(depsRaw))
            continue;
        for (const dep of depsRaw) {
            if (typeof dep !== 'string')
                continue;
            // dep may be "primitives.md" or "ui-tokens/primitives.md" — normalize to basename
            const base = path.posix.basename(dep);
            if (!present.has(base)) {
                collector.error('ui-tokens-depends-on-resolves', rel, `depends-on entry '${dep}' does not resolve to a sibling under ui-tokens/`);
            }
        }
    }
}
async function ruleAllFrontmatterParses(brandPath, collector, visited) {
    // Walk the entire repo for .md files we haven't already visited via the
    // layer pass. Guarantees `frontmatter-parses` covers files not declared
    // in the spec (e.g., personas/{audience}-{role}.md when persona pattern
    // wasn't traversed because we only walk pattern matches we expected).
    const visitedSet = new Set(visited.map((v) => v.rel));
    const all = await walkFiles(brandPath);
    for (const rel of all) {
        if (!rel.endsWith('.md'))
            continue;
        if (visitedSet.has(rel))
            continue;
        if (rel.startsWith('node_modules/'))
            continue;
        if (rel.startsWith('.git/'))
            continue;
        const abs = path.join(brandPath, rel);
        try {
            const parsed = await readFrontmatter(abs);
            visited.push({ rel, data: parsed.data });
        }
        catch (err) {
            if (err instanceof FrontmatterError) {
                collector.error('frontmatter-parses', rel, err.message);
            }
        }
    }
}
async function ruleFreshness(brandPath, subdir, thresholdDays, ruleId, collector) {
    const dir = path.join(brandPath, subdir);
    if (!(await isDir(dir)))
        return;
    const files = await walkFiles(dir);
    const now = new Date();
    for (const f of files) {
        if (!f.endsWith('.md'))
            continue;
        const rel = `${subdir}/${f}`;
        let data = null;
        try {
            const parsed = await readFrontmatter(path.join(dir, f));
            data = parsed.data;
        }
        catch {
            continue;
        }
        if (!data)
            continue;
        const lastUpdated = data['last_updated'] ?? data['updated'];
        if (typeof lastUpdated !== 'string')
            continue;
        const d = new Date(lastUpdated);
        if (isNaN(d.getTime()))
            continue;
        const days = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
        if (days > thresholdDays) {
            collector.warn(ruleId, rel, `last_updated ${lastUpdated} is ${days} days old (threshold: ${thresholdDays})`);
        }
    }
}
//# sourceMappingURL=validator.js.map