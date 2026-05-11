/**
 * Frontmatter field validator — enforces required fields, enum values,
 * and `const:` exact matches declared in `brand.yaml` for a given file
 * type.
 */
import { findAliasByAnyName } from '../aliases.js';
/**
 * Validate a parsed frontmatter object against the field map declared in
 * the spec. Reports per-field errors via the collector.
 *
 * Files marked `status: sample` are tolerated (placeholder values
 * permitted) per `sample-status-tolerates-placeholders`.
 */
export function validateFrontmatterFields(data, fields, filePath, ruleId, collector) {
    const isSample = data !== null && data['status'] === 'sample';
    // Fields where missing-required is demoted to warning. Multiple
    // real-world adopter brands consistently omit `last_updated` on
    // `proof/`, `product/`, and `design/` files even though brand.yaml
    // marks it required. Treating as a warning keeps the signal without
    // blocking known-good v1.2 brands. Tracked as spec friction.
    const REQUIRED_BUT_WARN_ONLY = new Set([
        'last_updated', // spec friction — see comment above
        'example_type', // some brands use `content_type` on examples; spec friction
    ]);
    for (const [name, def] of Object.entries(fields)) {
        let present = data !== null && Object.prototype.hasOwnProperty.call(data, name);
        // (v1.7) Alias-aware required-field check. The spec's layer blocks
        // still declare legacy field names (e.g., `priority_layers`,
        // `applies_to`) as required, but the v1.7 cross-layer-ref convention
        // accepts the canonical `*_refs` form too. If a known alias is in
        // play and EITHER the canonical OR any legacy name is present, the
        // requirement is satisfied. The dedicated info-severity advisory
        // for legacy usage is emitted by `legacy-ref-field-migration-recommended`.
        if (!present && data !== null) {
            const alias = findAliasByAnyName(name);
            if (alias) {
                const canonicalPresent = Object.prototype.hasOwnProperty.call(data, alias.canonical);
                const anyLegacyPresent = alias.legacy.some((l) => Object.prototype.hasOwnProperty.call(data, l));
                if (canonicalPresent || anyLegacyPresent) {
                    present = true;
                }
            }
        }
        if (def['required'] === true && !present) {
            if (REQUIRED_BUT_WARN_ONLY.has(name)) {
                collector.warn(ruleId, filePath, `recommended frontmatter field missing: ${name} (spec marks required; demoted to warning per known v1.2 brand patterns)`);
            }
            else {
                collector.error(ruleId, filePath, `missing required frontmatter field: ${name}`);
            }
            continue;
        }
        if (!present || isSample)
            continue;
        // Resolve value with alias-awareness: if the spec's legacy name
        // isn't literally present but a registered canonical/legacy alias
        // is, read from the alias. This prevents downstream enum/type
        // checks from misfiring against `undefined`.
        let value = data[name];
        if (value === undefined && data !== null) {
            const alias = findAliasByAnyName(name);
            if (alias) {
                const ordered = [alias.canonical, ...alias.legacy];
                for (const candidate of ordered) {
                    if (Object.prototype.hasOwnProperty.call(data, candidate)) {
                        value = data[candidate];
                        break;
                    }
                }
            }
        }
        // Enum check — common fields (status/visibility) handled in
        // common-fields.ts; per-file enums (perspective, register, layer
        // const-as-enum) stay errors. Lenience: `perspective` accepts
        // `first-person-plural` (in use by adopter brands on social-register
        // voice files); tracked as v1.3 spec extension candidate.
        if (Array.isArray(def['enum']) && !def['enum'].includes(value)) {
            const isPerspectiveExtension = name === 'perspective' &&
                typeof value === 'string' &&
                ['first-person-plural', 'second-person-plural', 'third-person-plural'].includes(value);
            if (isPerspectiveExtension) {
                collector.warn(ruleId, filePath, `frontmatter.${name} = ${JSON.stringify(value)} extends spec enum (v1.3 candidate)`);
            }
            else {
                collector.error(ruleId, filePath, `frontmatter.${name} = ${JSON.stringify(value)} is not in enum [${def['enum'].join(', ')}]`);
            }
        }
        // const check
        if (def['const'] !== undefined && value !== def['const']) {
            collector.error(ruleId, filePath, `frontmatter.${name} must equal ${JSON.stringify(def['const'])}, got ${JSON.stringify(value)}`);
        }
        // Type check (lightweight). Special leniencies:
        //   - `version` accepts string OR number (YAML coerces unquoted `1.0`)
        //   - declared-array fields accept a single string (auto-promote)
        const declaredType = def['type'];
        if (typeof declaredType === 'string') {
            const actual = Array.isArray(value) ? 'array' : value === null ? 'null' : typeof value;
            const want = declaredType;
            let match = (want === 'array' && actual === 'array') ||
                (want === 'string' && actual === 'string') ||
                (want === 'integer' && actual === 'number' && Number.isInteger(value)) ||
                (want === 'number' && actual === 'number') ||
                (want === 'boolean' && actual === 'boolean') ||
                (want === 'object' && actual === 'object');
            // Lenience: `version` is documented in spec as "semver or simple
            // decimal (e.g., '1.0', '1.0.0')" — unquoted decimals get parsed
            // as numbers. Accept either.
            if (!match && name === 'version' && want === 'string' && actual === 'number') {
                match = true;
            }
            // Lenience: declared-array fields tolerate single-string shorthand
            // (e.g., `depends-on: primitives.md`). Real brands use this form.
            if (!match && want === 'array' && actual === 'string') {
                match = true;
            }
            if (!match) {
                collector.error(ruleId, filePath, `frontmatter.${name} must be type ${want}, got ${actual}`);
            }
        }
    }
}
//# sourceMappingURL=frontmatter-fields.js.map