/**
 * Rule: cross-layer-ref-target-resolves (brand-spec v1.7, severity: error)
 *
 * Every frontmatter field whose name matches `^[a-z_]+_refs?$` is treated
 * as a cross-layer reference and MUST resolve to an existing target.
 *
 * Type inference (no explicit `type:` is carried by the naming convention;
 * the structured `references:` block is handled by a separate rule):
 *
 *   - Layer name (string equals one of `spec.layers` keys)        → layer
 *   - Token-shaped (`--<category>-...` form)                      → token (warn-only)
 *   - Path-with-fragment (`x.md#anchor`)                          → path_with_fragment
 *   - URL (http(s)://...)                                         → url
 *   - Anything else string-shaped                                 → file (resolves vs brand root)
 *
 * Plural fields (`*_refs`) carry an array; each entry is checked
 * independently. Singular fields (`*_ref`) carry a scalar. Mismatched
 * shapes (array under `*_ref` or scalar under `*_refs`) are flagged but
 * the rule still attempts per-entry resolution where possible.
 *
 * Token resolution is intentionally heuristic until the body-parse
 * subsystem can resolve token names against `design-tokens.md` /
 * `ui-tokens/`. Per spec, token misses are warn (not error).
 */

import path from 'node:path';
import { exists, walkFiles } from '../../fs-utils.js';
import { readFrontmatter, FrontmatterError } from '../../frontmatter.js';
import type { IssueCollector } from '../../result.js';
import type { BrandSpec } from '../../schema/types.js';

const REF_FIELD_RE = /^[a-z_]+_refs?$/;

/**
 * Field names that match the cross-layer-ref naming pattern but whose
 * values are NOT cross-layer references — they're domain-specific
 * vocabularies validated by other rules.
 *
 * - `applies_to_refs` carries channel/context slugs (e.g., `website`,
 *   `linkedin-company-page`) per `conventions.applies_to_baseline_slugs`
 *   (v1.3). Slugs are validated as kebab-case strings against the
 *   baseline by a separate rule; they do not resolve to layers or files.
 *   The v1.7 rename to `*_refs` was a naming-convention housekeeping
 *   move; the value semantics did not change. Spec backward-compat
 *   guarantee: brands using `applies_to_refs` must continue to validate
 *   cleanly.
 */
const NON_RESOLVING_REF_FIELDS = new Set(['applies_to_refs']);
const TOKEN_SHAPE_RE = /^--[a-z][a-z0-9]*(?:-[a-z0-9]+)+$/;
const PATH_FRAGMENT_RE = /^([^#\s]+)#([^\s]+)$/;

const RULE_ID = 'cross-layer-ref-target-resolves';

function isUrl(s: string): boolean {
  try {
    const u = new URL(s);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

function isTokenShape(s: string): boolean {
  return TOKEN_SHAPE_RE.test(s);
}

function isPathWithFragment(s: string): { file: string; anchor: string } | null {
  const m = s.match(PATH_FRAGMENT_RE);
  if (!m || !m[1] || !m[2]) return null;
  return { file: m[1], anchor: m[2] };
}

async function resolveOne(
  value: unknown,
  fieldName: string,
  filePath: string,
  brandPath: string,
  layerNames: Set<string>,
  collector: IssueCollector,
): Promise<void> {
  if (typeof value !== 'string' || value.trim() === '') {
    collector.error(
      RULE_ID,
      filePath,
      `cross-layer reference '${fieldName}' has non-string or empty value: ${JSON.stringify(value)}`,
    );
    return;
  }
  const v = value.trim();

  // 1. Layer name? (only meaningful when the value isn't path-shaped)
  if (!v.includes('/') && !v.includes('.') && layerNames.has(v)) {
    return; // resolves
  }

  // 2. URL
  if (isUrl(v)) {
    return; // well-formed by construction
  }

  // 3. Token shape — warn-only per spec (token resolution deferred)
  if (isTokenShape(v)) {
    collector.warn(
      RULE_ID,
      filePath,
      `cross-layer reference '${fieldName}' value '${v}' is token-shaped; full token resolution depends on the body-parse subsystem and is deferred (warn-only per v1.7 spec)`,
    );
    return;
  }

  // 4. Path with fragment
  const pf = isPathWithFragment(v);
  if (pf) {
    const candidate = path.join(brandPath, pf.file);
    if (!(await exists(candidate))) {
      collector.error(
        RULE_ID,
        filePath,
        `cross-layer reference '${fieldName}' file '${pf.file}' does not exist (anchor verification deferred to body-parse)`,
      );
    }
    return;
  }

  // 5. File path (anything else string-shaped)
  // If value looks like a bare layer name but didn't match (typo), treat as
  // file lookup so the error message points at the actual missing path.
  const candidate = path.join(brandPath, v);
  if (!(await exists(candidate))) {
    // If it has no slash and no extension, it might have been intended as a
    // layer name — give a more helpful error.
    if (!v.includes('/') && !v.includes('.')) {
      collector.error(
        RULE_ID,
        filePath,
        `cross-layer reference '${fieldName}' value '${v}' is not a declared layer and does not exist as a file in the brand repo`,
      );
    } else {
      collector.error(
        RULE_ID,
        filePath,
        `cross-layer reference '${fieldName}' file '${v}' does not exist in the brand repo`,
      );
    }
  }
}

export async function validateCrossLayerRefTargets(
  brandPath: string,
  spec: BrandSpec,
  collector: IssueCollector,
): Promise<void> {
  const layerNames = new Set(Object.keys(spec.layers));
  const all = await walkFiles(brandPath);
  for (const rel of all) {
    if (!rel.endsWith('.md')) continue;
    if (rel.startsWith('node_modules/')) continue;
    if (rel.startsWith('.git/')) continue;
    const abs = path.join(brandPath, rel);
    let data: Record<string, unknown> | null = null;
    try {
      const parsed = await readFrontmatter(abs);
      data = parsed.data;
    } catch (err) {
      if (err instanceof FrontmatterError) continue; // already reported elsewhere
      continue;
    }
    if (!data) continue;
    for (const [name, raw] of Object.entries(data)) {
      if (!REF_FIELD_RE.test(name)) continue;
      if (NON_RESOLVING_REF_FIELDS.has(name)) continue;
      const isPlural = name.endsWith('_refs');
      if (isPlural) {
        if (!Array.isArray(raw)) {
          // Tolerate single-string shorthand consistent with frontmatter-fields lenience.
          if (typeof raw === 'string') {
            await resolveOne(raw, name, rel, brandPath, layerNames, collector);
            continue;
          }
          collector.error(
            RULE_ID,
            rel,
            `cross-layer reference '${name}' must be an array (plural form); got ${typeof raw}`,
          );
          continue;
        }
        for (const entry of raw) {
          await resolveOne(entry, name, rel, brandPath, layerNames, collector);
        }
      } else {
        // singular *_ref
        if (Array.isArray(raw)) {
          collector.error(
            RULE_ID,
            rel,
            `cross-layer reference '${name}' must be a scalar (singular form); got array`,
          );
          continue;
        }
        await resolveOne(raw, name, rel, brandPath, layerNames, collector);
      }
    }
  }
}
