/**
 * Validation result types — the public output shape of the validator.
 */
export type Severity = 'error' | 'warning' | 'info';
export interface ValidationIssue {
    severity: Severity;
    ruleId: string;
    /** File or directory path relative to the brand repo root. Empty string for repo-level issues. */
    path: string;
    message: string;
}
export interface ValidationResult {
    brandPath: string;
    /** brand-spec contract version validated against (e.g., "1.3.0"). */
    schemaVersion: string;
    errors: ValidationIssue[];
    warnings: ValidationIssue[];
    /** Info-severity advisories — non-blocking, drift-detection signals introduced in brand-spec v1.3. */
    infos: ValidationIssue[];
    layersChecked: number;
    layersValid: number;
}
export declare class IssueCollector {
    readonly errors: ValidationIssue[];
    readonly warnings: ValidationIssue[];
    readonly infos: ValidationIssue[];
    error(ruleId: string, path: string, message: string): void;
    warn(ruleId: string, path: string, message: string): void;
    info(ruleId: string, path: string, message: string): void;
}
//# sourceMappingURL=result.d.ts.map