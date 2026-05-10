/**
 * Output formatters for ValidationResult — human-readable and JSON.
 */
export function formatHuman(result, opts = {}) {
    const lines = [];
    for (const e of result.errors) {
        lines.push(formatLine(e));
    }
    if (!opts.quiet) {
        for (const w of result.warnings) {
            lines.push(formatLine(w));
        }
    }
    lines.push(`${symbolFor('summary')} ${result.layersValid} of ${result.layersChecked} layers valid`);
    lines.push(`${result.errors.length} error${result.errors.length === 1 ? '' : 's'}, ${result.warnings.length} warning${result.warnings.length === 1 ? '' : 's'}`);
    return lines.join('\n');
}
function formatLine(issue) {
    const sym = issue.severity === 'error' ? '✗' : '⚠';
    const where = issue.path ? `${issue.path}: ` : '';
    return `${sym} ${where}${issue.message} [${issue.ruleId}]`;
}
function symbolFor(kind) {
    return kind === 'summary' ? '✓' : '·';
}
export function formatJson(result) {
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=reporter.js.map