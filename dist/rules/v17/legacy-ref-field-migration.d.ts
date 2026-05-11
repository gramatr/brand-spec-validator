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
import type { IssueCollector } from '../../result.js';
export declare function validateLegacyRefFieldMigration(brandPath: string, collector: IssueCollector): Promise<void>;
//# sourceMappingURL=legacy-ref-field-migration.d.ts.map