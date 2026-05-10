/**
 * Cross-cutting frontmatter validation: enforces enum values for fields
 * declared under `conventions.frontmatter.common_fields` (status,
 * visibility, source_authority.*) on EVERY file we parse, regardless of
 * which layer the file belongs to.
 *
 * Also handles the v1.1 → v1.2 backward-compat migration warning for
 * `audience: internal` on `proof/competitive.md`.
 */
import type { BrandSpec, FrontmatterField } from '../schema/types.js';
import type { IssueCollector } from '../result.js';
interface CommonFieldsContext {
    spec: BrandSpec;
    collector: IssueCollector;
}
export declare function validateCommonFields(data: Record<string, unknown> | null, filePath: string, ctx: CommonFieldsContext): void;
/** Pull common-fields enum hint from the spec (used for tests / introspection). */
export declare function commonFieldsFromSpec(spec: BrandSpec): Record<string, FrontmatterField>;
export {};
//# sourceMappingURL=common-fields.d.ts.map