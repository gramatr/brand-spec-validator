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
import type { IssueCollector } from '../../result.js';
export declare function validateStructuredReferencesKind(brandPath: string, collector: IssueCollector): Promise<void>;
//# sourceMappingURL=structured-references-kind-valid.d.ts.map