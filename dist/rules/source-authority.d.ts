/**
 * Cross-layer rules around source_authority frontmatter:
 *   - source-authority-upstream-required (v1.2)
 *   - source-authority-notes-required (v1.2)
 *   - source-authority-mirror-freshness-warn (v1.2)
 */
import type { IssueCollector } from '../result.js';
interface SAContext {
    brandPath: string;
    collector: IssueCollector;
    freshness: boolean;
}
export declare function validateSourceAuthority(data: Record<string, unknown> | null, filePath: string, ctx: SAContext): Promise<void>;
export {};
//# sourceMappingURL=source-authority.d.ts.map