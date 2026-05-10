/**
 * Validation result types — the public output shape of the validator.
 */
export class IssueCollector {
    errors = [];
    warnings = [];
    infos = [];
    error(ruleId, path, message) {
        this.errors.push({ severity: 'error', ruleId, path, message });
    }
    warn(ruleId, path, message) {
        this.warnings.push({ severity: 'warning', ruleId, path, message });
    }
    info(ruleId, path, message) {
        this.infos.push({ severity: 'info', ruleId, path, message });
    }
}
//# sourceMappingURL=result.js.map