/**
 * Field-name alias registry — implements the v1.7 cross-layer reference
 * naming convention's backward-compatibility surface.
 *
 * brand-spec v1.7 introduces the `*_ref` / `*_refs` naming convention for
 * cross-layer references and renames three legacy per-layer fields to the
 * convention-conformant shape:
 *
 *   priority_layers   → priority_layers_refs   (agent-context.md)
 *   applies_to        → applies_to_refs        (voice/registers/<slug>.md)
 *   source_authority.upstream → upstream_ref   (any file with source_authority)
 *
 * Brands MAY use either name. Validators read both. When the legacy name
 * is observed, an info-severity advisory recommends migration. Hard
 * deprecation is deferred to v2.
 *
 * Spec references:
 *   - conventions.cross_layer_references.field_name_pattern (v1.7.0)
 *   - conventions.cross_layer_references.backward_compat.legacy_field_mapping (v1.7.0)
 *   - validation rule legacy-ref-field-migration-recommended (v1.7.0)
 */
export const FIELD_ALIASES = [
    {
        canonical: 'priority_layers_refs',
        legacy: ['priority_layers'],
        context: 'agent_context',
    },
    {
        canonical: 'applies_to_refs',
        legacy: ['applies_to'],
        context: 'voice_register',
    },
    {
        canonical: 'upstream_ref',
        legacy: ['upstream'],
        context: 'source_authority',
    },
    {
        canonical: 'target_persona_ref',
        legacy: ['target_persona'],
        context: 'examples',
    },
];
/**
 * Read a frontmatter field with alias support. Tries the canonical name
 * first, then each registered legacy alias in declaration order.
 *
 * Callers receive the value plus the actual name used so they can emit
 * the legacy-ref-field-migration-recommended advisory when the value
 * came from a legacy fallback.
 *
 * Fields that are not registered in `FIELD_ALIASES` are read directly
 * from the data object — this lets callers funnel all frontmatter reads
 * through `readAliased` without having to branch on whether a field is
 * aliased.
 */
export function readAliased(data, aliasFor) {
    const alias = FIELD_ALIASES.find((a) => a.canonical === aliasFor);
    if (!alias) {
        if (Object.prototype.hasOwnProperty.call(data, aliasFor)) {
            return { value: data[aliasFor], usedName: aliasFor };
        }
        return { value: undefined, usedName: undefined };
    }
    if (Object.prototype.hasOwnProperty.call(data, alias.canonical)) {
        return { value: data[alias.canonical], usedName: alias.canonical };
    }
    for (const legacy of alias.legacy) {
        if (Object.prototype.hasOwnProperty.call(data, legacy)) {
            return { value: data[legacy], usedName: legacy };
        }
    }
    return { value: undefined, usedName: undefined };
}
/**
 * Find the alias entry whose canonical or legacy names include the given
 * field name. Useful for callers that have a field name in hand and need
 * to ask "is this an aliased field?".
 */
export function findAliasByAnyName(name) {
    return FIELD_ALIASES.find((a) => a.canonical === name || a.legacy.includes(name));
}
/**
 * Returns true when `usedName` is a legacy (non-canonical) form of an
 * aliased field. Callers use this to gate the migration advisory.
 */
export function isLegacyAlias(usedName) {
    return FIELD_ALIASES.some((a) => a.legacy.includes(usedName));
}
/**
 * Recommended canonical name for a legacy field. Returns `undefined` if
 * the input isn't a recognized legacy alias.
 */
export function canonicalFor(legacyName) {
    const alias = FIELD_ALIASES.find((a) => a.legacy.includes(legacyName));
    return alias?.canonical;
}
//# sourceMappingURL=aliases.js.map