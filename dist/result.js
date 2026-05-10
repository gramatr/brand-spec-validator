/**
 * Validation result types — the public output shape of the validator.
 */
export class IssueCollector {
    errors = [];
    warnings = [];
    error(ruleId, path, message) {
        this.errors.push({ severity: 'error', ruleId, path, message });
    }
    warn(ruleId, path, message) {
        this.warnings.push({ severity: 'warning', ruleId, path, message });
    }
}
//# sourceMappingURL=result.js.map