/**
 * Rule: register-inheritance-cannot-subtract (brand-spec v1.3, severity: error)
 *
 * Voice registers ADD permissions; they MUST NOT subtract brand-wide
 * constraints. Specifically: any term listed under the "Forbidden Terms"
 * section of `vocabulary.md` MUST NOT appear as an explicitly-allowed
 * term inside an "allowed" / "permitted" / "what this register allows"
 * section of any `voice/registers/*.md` file.
 *
 * Body-parse-aware: scans the register body for forbidden-term mentions
 * inside permissive sections; ignores quoted callouts and "what does
 * NOT fit" sections (those contexts are illustrative, not permissive).
 */
import type { BodyCache } from '../../body-parse/index.js';
import type { IssueCollector } from '../../result.js';
export declare function validateRegisterInheritance(brandPath: string, cache: BodyCache, collector: IssueCollector): Promise<void>;
//# sourceMappingURL=register-inheritance.d.ts.map