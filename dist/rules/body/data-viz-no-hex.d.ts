/**
 * Rule: data-viz-no-hex-redeclaration (brand-spec v1.5, severity: warn)
 *
 * Files under `data-viz/` SHOULD NOT contain hex / rgb / hsl color
 * literals. Color values belong in `design-tokens.md` or `ui-tokens/`;
 * the data-viz layer assigns ROLES to existing tokens.
 *
 * Body-parse-aware exemptions:
 *   - hex literals inside fenced code blocks (illustrative, not authoritative)
 *   - hex literals inside `> Quoted:` blockquote callouts
 */
import type { BodyCache } from '../../body-parse/index.js';
import type { IssueCollector } from '../../result.js';
export declare function validateDataVizNoHex(brandPath: string, cache: BodyCache, collector: IssueCollector): Promise<void>;
//# sourceMappingURL=data-viz-no-hex.d.ts.map