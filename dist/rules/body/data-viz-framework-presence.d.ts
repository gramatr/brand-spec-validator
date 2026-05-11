/**
 * Rule: data-viz-framework-presence (brand-spec v1.5, severity: info)
 *
 * When `data-viz/_framework.md` exists, its body SHOULD cover a small
 * set of expected topics so the layer's scope and consumption model are
 * documented. We check for headings that match an expected topic list;
 * missing topics surface as info-severity advisories.
 *
 * Implemented as a presence check; the info severity matches the v1.5
 * `data-viz-framework-recommended` companion rule.
 */
import type { BodyCache } from '../../body-parse/index.js';
import type { IssueCollector } from '../../result.js';
export declare function validateDataVizFrameworkPresence(brandPath: string, cache: BodyCache, collector: IssueCollector): Promise<void>;
//# sourceMappingURL=data-viz-framework-presence.d.ts.map