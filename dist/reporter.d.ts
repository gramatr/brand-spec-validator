/**
 * Output formatters for ValidationResult — human-readable and JSON.
 */
import type { ValidationResult } from './result.js';
export declare function formatHuman(result: ValidationResult, opts?: {
    quiet?: boolean;
}): string;
export declare function formatJson(result: ValidationResult): string;
//# sourceMappingURL=reporter.d.ts.map