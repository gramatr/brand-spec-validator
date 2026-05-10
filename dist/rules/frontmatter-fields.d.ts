/**
 * Frontmatter field validator — enforces required fields, enum values,
 * and `const:` exact matches declared in `brand.yaml` for a given file
 * type.
 */
import type { FrontmatterMap } from '../schema/types.js';
import type { IssueCollector } from '../result.js';
/**
 * Validate a parsed frontmatter object against the field map declared in
 * the spec. Reports per-field errors via the collector.
 *
 * Files marked `status: sample` are tolerated (placeholder values
 * permitted) per `sample-status-tolerates-placeholders`.
 */
export declare function validateFrontmatterFields(data: Record<string, unknown> | null, fields: FrontmatterMap, filePath: string, ruleId: string, collector: IssueCollector): void;
//# sourceMappingURL=frontmatter-fields.d.ts.map