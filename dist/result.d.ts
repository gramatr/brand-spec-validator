/**
 * Validation result types — the public output shape of the validator.
 */
export type Severity = 'error' | 'warning';
export interface ValidationIssue {
    severity: Severity;
    ruleId: string;
    /** File or directory path relative to the brand repo root. Empty string for repo-level issues. */
    path: string;
    message: string;
}
export interface ValidationResult {
    brandPath: string;
    /** brand-spec contract version validated against (e.g., "1.2.0"). */
    schemaVersion: string;
    errors: ValidationIssue[];
    warnings: ValidationIssue[];
    layersChecked: number;
    layersValid: number;
}
export declare class IssueCollector {
    readonly errors: ValidationIssue[];
    readonly warnings: ValidationIssue[];
    error(ruleId: string, path: string, message: string): void;
    warn(ruleId: string, path: string, message: string): void;
}
//# sourceMappingURL=result.d.ts.map