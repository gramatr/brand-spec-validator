/**
 * v1.7 cross-layer reference convention rules.
 *
 * Three rules ship together because they implement a single coordinated
 * convention: a frontmatter naming pattern (`*_ref` / `*_refs`), an
 * optional structured `references:` block, and a legacy-name migration
 * advisory. See `vendor/brand-spec/brand.yaml` ->
 * `conventions.cross_layer_references` for the spec.
 */

export { validateCrossLayerRefTargets } from './cross-layer-ref-target-resolves.js';
export { validateStructuredReferencesKind } from './structured-references-kind-valid.js';
export { validateLegacyRefFieldMigration } from './legacy-ref-field-migration.js';
