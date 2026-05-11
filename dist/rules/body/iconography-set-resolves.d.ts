/**
 * Rule: iconography-set-resolves (brand-spec v1.6.1, severity: info)
 *
 * Hybrid frontmatter+filesystem rule. When `design/iconography.md`
 * declares `icon_set.name: custom` (or any value indicating a
 * brand-provided set), `design/icons/` SHOULD exist with at least one
 * icon source file and a `_manifest.md`. When `icon_set.name`
 * references a well-known public library (lucide, material-symbols,
 * heroicons, fontawesome, phosphor, tabler), no local files are
 * required — informational only.
 *
 * The body-parse subsystem isn't strictly required for the frontmatter
 * read, but the rule lives in `body/` because the iconography body
 * informs which check applies (e.g., a brand may indicate custom in
 * body prose when frontmatter is absent — covered by a fallback scan).
 */
import type { BodyCache } from '../../body-parse/index.js';
import type { IssueCollector } from '../../result.js';
export declare function validateIconographySetResolves(brandPath: string, cache: BodyCache, collector: IssueCollector): Promise<void>;
//# sourceMappingURL=iconography-set-resolves.d.ts.map