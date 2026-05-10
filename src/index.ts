/**
 * Public API for @gramatr/brand-spec-validator.
 */

export { validateBrand } from './validator.js';
export type { ValidateOptions } from './validator.js';
export type { ValidationResult, ValidationIssue, Severity } from './result.js';
export { formatHuman, formatJson } from './reporter.js';
export { loadBrandSpec, vendoredSpecPath } from './schema/load.js';
export type { BrandSpec } from './schema/types.js';
