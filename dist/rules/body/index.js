/**
 * Body-parse-aware rules (brand-spec v0.2.0).
 *
 * Each rule consumes a shared `BodyCache` so files parsed by one rule
 * are reused by the next. Rule entry points are async and append issues
 * to the provided collector.
 */
export { validateRegisterInheritance } from './register-inheritance.js';
export { validateDataVizNoHex } from './data-viz-no-hex.js';
export { validateDataVizFrameworkPresence } from './data-viz-framework-presence.js';
export { validateIconographySetResolves } from './iconography-set-resolves.js';
//# sourceMappingURL=index.js.map