/**
 * Output formatters for ValidationResult — human-readable and JSON.
 */

import type { ValidationResult, ValidationIssue } from './result.js';

export function formatHuman(result: ValidationResult, opts: { quiet?: boolean } = {}): string {
  const lines: string[] = [];
  for (const e of result.errors) {
    lines.push(formatLine(e));
  }
  if (!opts.quiet) {
    for (const w of result.warnings) {
      lines.push(formatLine(w));
    }
  }
  lines.push(
    `${symbolFor('summary')} ${result.layersValid} of ${result.layersChecked} layers valid`,
  );
  lines.push(
    `${result.errors.length} error${result.errors.length === 1 ? '' : 's'}, ${result.warnings.length} warning${result.warnings.length === 1 ? '' : 's'}`,
  );
  return lines.join('\n');
}

function formatLine(issue: ValidationIssue): string {
  const sym = issue.severity === 'error' ? '✗' : '⚠';
  const where = issue.path ? `${issue.path}: ` : '';
  return `${sym} ${where}${issue.message} [${issue.ruleId}]`;
}

function symbolFor(kind: 'summary'): string {
  return kind === 'summary' ? '✓' : '·';
}

export function formatJson(result: ValidationResult): string {
  return JSON.stringify(result, null, 2);
}
