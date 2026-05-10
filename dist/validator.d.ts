/**
 * Brand-spec validator orchestrator.
 *
 * Walks every layer declared in `brand.yaml`, parses each file's
 * frontmatter, and runs both per-file and cross-layer rules. Reports
 * issues via the public ValidationResult shape.
 */
import { type ValidationResult } from './result.js';
export interface ValidateOptions {
    /**
     * Optional path to a brand-spec checkout (we read its `brand.yaml`).
     * When omitted, the vendored copy that ships with this package is used.
     */
    specPath?: string;
    /** When false, skip freshness warning rules. Default: true. */
    freshness?: boolean;
}
export declare function validateBrand(brandPath: string, options?: ValidateOptions): Promise<ValidationResult>;
//# sourceMappingURL=validator.d.ts.map