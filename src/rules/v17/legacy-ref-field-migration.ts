/**
 * Rule: legacy-ref-field-migration-recommended (brand-spec v1.7, severity: info)
 *
 * When a known legacy reference field is present in frontmatter, the
 * validator emits an info-severity advisory recommending migration to the
 * convention-conformant `*_ref` / `*_refs` name. The legacy field
 * continues to validate cleanly — this rule never blocks.
 *
 * Legacy mapping is sourced from `FIELD_ALIASES` in `src/aliases.ts`,
 * which itself mirrors `conventions.cross_layer_references.backward_compat
 * .legacy_field_mapping` in brand.yaml v1.7.
 *
 * Scope of the walk: only the layer/path each alias is documented as
 * appearing in is checked, to keep the advisory targeted. Two alias
 * surfaces:
 *   - top-level legacy field (e.g., agent-context.md.priority_layers,
 *     voice/registers/<slug>.md.applies_to)
 *   - nested legacy field under source_authority (any file)
 */

import path from 'node:path';
import { walkFiles } from '../../fs-utils.js';
import { readFrontmatter, FrontmatterError } from '../../frontmatter.js';
import type { IssueCollector } from '../../result.js';
import { FIELD_ALIASES } from '../../aliases.js';

const RULE_ID = 'legacy-ref-field-migration-recommended';

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/**
 * Whether the alias is reached via top-level frontmatter (vs nested under
 * source_authority). Today: source_authority is the only nested context.
 */
function isNestedSourceAuthority(context: string): boolean {
  return context === 'source_authority';
}

export async function validateLegacyRefFieldMigration(
  brandPath: string,
  collector: IssueCollector,
): Promise<void> {
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
      if (err instanceof FrontmatterError) continue;
      continue;
    }
    if (!data) continue;

    for (const alias of FIELD_ALIASES) {
      if (isNestedSourceAuthority(alias.context)) {
        const sa = data['source_authority'];
        if (!isObject(sa)) continue;
        // Only fire if canonical absent and a legacy is present.
        if (Object.prototype.hasOwnProperty.call(sa, alias.canonical)) continue;
        for (const legacy of alias.legacy) {
          if (Object.prototype.hasOwnProperty.call(sa, legacy)) {
            collector.info(
              RULE_ID,
              rel,
              `field 'source_authority.${legacy}' is the legacy name; consider migrating to 'source_authority.${alias.canonical}' per the v1.7 cross-layer-ref convention`,
            );
            break;
          }
        }
      } else {
        if (Object.prototype.hasOwnProperty.call(data, alias.canonical)) continue;
        for (const legacy of alias.legacy) {
          if (Object.prototype.hasOwnProperty.call(data, legacy)) {
            collector.info(
              RULE_ID,
              rel,
              `field '${legacy}' is the legacy name; consider migrating to '${alias.canonical}' per the v1.7 cross-layer-ref convention`,
            );
            break;
          }
        }
      }
    }
  }
}
