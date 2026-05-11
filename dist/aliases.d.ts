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
export interface FieldAlias {
    /** Canonical name per the v1.7+ convention (the `*_ref` / `*_refs` name). */
    canonical: string;
    /** Legacy names accepted with backward-compat advisory. */
    legacy: string[];
    /**
     * Human-readable context tag — where this alias applies (e.g.,
     * `agent_context` for `priority_layers_refs`). Used in advisory messages
     * and as a hint for future per-context aliases.
     */
    context: string;
}
export declare const FIELD_ALIASES: FieldAlias[];
export interface AliasReadResult {
    /** The resolved value, or `undefined` when neither canonical nor any legacy name is present. */
    value: unknown;
    /**
     * The actual field name that supplied the value. `undefined` when no
     * name was found. Equal to `canonical` on the canonical path; equal to
     * one of the legacy names when the value came via fallback.
     */
    usedName: string | undefined;
}
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
export declare function readAliased(data: Record<string, unknown>, aliasFor: string): AliasReadResult;
/**
 * Find the alias entry whose canonical or legacy names include the given
 * field name. Useful for callers that have a field name in hand and need
 * to ask "is this an aliased field?".
 */
export declare function findAliasByAnyName(name: string): FieldAlias | undefined;
/**
 * Returns true when `usedName` is a legacy (non-canonical) form of an
 * aliased field. Callers use this to gate the migration advisory.
 */
export declare function isLegacyAlias(usedName: string): boolean;
/**
 * Recommended canonical name for a legacy field. Returns `undefined` if
 * the input isn't a recognized legacy alias.
 */
export declare function canonicalFor(legacyName: string): string | undefined;
//# sourceMappingURL=aliases.d.ts.map