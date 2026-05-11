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
import type { IssueCollector } from '../../result.js';
import type { BrandSpec } from '../../schema/types.js';
export declare function validateCrossLayerRefTargets(brandPath: string, spec: BrandSpec, collector: IssueCollector): Promise<void>;
//# sourceMappingURL=cross-layer-ref-target-resolves.d.ts.map