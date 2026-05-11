/**
 * Rule: structured-references-kind-valid (brand-spec v1.7, severity: error)
 *
 * When a file declares the optional `references:` frontmatter block, every
 * entry MUST carry `type`, `target`, and `kind`. The `kind` value MUST be
 * one of `requires | recommends | cites`. The `type` value MUST be one of
 * `layer | file | token | path_with_fragment | url | layer-entries`.
 *
 * The `entries` field is meaningful only when `type: layer-entries`;
 * appearance with any other type is flagged as a warn (advisory; the spec
 * says validators MAY warn).
 *
 * The `notes` field is free-text and unconstrained.
 *
 * Per-target resolution is intentionally NOT done here — that's the job
 * of `cross-layer-ref-target-resolves`. This rule is exclusively about
 * the shape and enums of the structured block.
 */
import path from 'node:path';
import { walkFiles } from '../../fs-utils.js';
import { readFrontmatter, FrontmatterError } from '../../frontmatter.js';
const RULE_ID = 'structured-references-kind-valid';
const VALID_KINDS = ['requires', 'recommends', 'cites'];
const VALID_TYPES = [
    'layer',
    'file',
    'token',
    'path_with_fragment',
    'url',
    'layer-entries',
];
function isObject(v) {
    return typeof v === 'object' && v !== null && !Array.isArray(v);
}
function checkEntry(entryKey, entry, filePath, collector) {
    // Required fields
    for (const required of ['type', 'target', 'kind']) {
        if (!Object.prototype.hasOwnProperty.call(entry, required)) {
            collector.error(RULE_ID, filePath, `references.${entryKey} missing required field '${required}'`);
        }
    }
    const kind = entry['kind'];
    if (kind !== undefined && !VALID_KINDS.includes(kind)) {
        collector.error(RULE_ID, filePath, `references.${entryKey}.kind = ${JSON.stringify(kind)} is not in [${VALID_KINDS.join(', ')}]`);
    }
    const type = entry['type'];
    if (type !== undefined && !VALID_TYPES.includes(type)) {
        collector.error(RULE_ID, filePath, `references.${entryKey}.type = ${JSON.stringify(type)} is not in [${VALID_TYPES.join(', ')}]`);
    }
    // entries only meaningful for layer-entries
    if (Object.prototype.hasOwnProperty.call(entry, 'entries') &&
        type !== 'layer-entries') {
        collector.warn(RULE_ID, filePath, `references.${entryKey}.entries is only meaningful when type: layer-entries (got type: ${JSON.stringify(type)})`);
    }
}
export async function validateStructuredReferencesKind(brandPath, collector) {
    const all = await walkFiles(brandPath);
    for (const rel of all) {
        if (!rel.endsWith('.md'))
            continue;
        if (rel.startsWith('node_modules/'))
            continue;
        if (rel.startsWith('.git/'))
            continue;
        const abs = path.join(brandPath, rel);
        let data = null;
        try {
            const parsed = await readFrontmatter(abs);
            data = parsed.data;
        }
        catch (err) {
            if (err instanceof FrontmatterError)
                continue;
            continue;
        }
        if (!data)
            continue;
        const refs = data['references'];
        if (!isObject(refs))
            continue;
        for (const [key, entry] of Object.entries(refs)) {
            if (!isObject(entry)) {
                collector.error(RULE_ID, rel, `references.${key} must be a mapping (object) with type/target/kind fields`);
                continue;
            }
            checkEntry(key, entry, rel, collector);
        }
    }
}
//# sourceMappingURL=structured-references-kind-valid.js.map