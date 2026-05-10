# Changelog

## 0.1.5

Sync vendored brand-spec to v1.6.1. v1.6.1 is a PATCH bump that extends the existing `design/` layer with iconography conventions: a new `templates/empty-brand/design/iconography.md` template, plus 3 new validation rules (`iconography-set-resolves`, `iconography-sizing-references-resolve`, `iconography-decorative-distinction-recommended`).

**No validator code changes required.** v1.6.1 is purely additive within the existing `design/` layer — no new top-level layers, no new severity levels, no new field types the existing Zod model rejects. The vendored `brand.yaml` parses cleanly and all 20 existing tests pass unchanged.

**Note:** This release also rolls forward through v1.6.0 (which introduced a new top-level `image-generation/` layer); no separate v1.6.0 validator sync was published. Layer count reported by the validator therefore increases from 17 to 18 in this release (reflecting the v1.6.0 `image-generation/` layer). The v1.6.1 iconography extensions live inside the existing `design/` layer and do not change the layer count on their own.

**New rule logic intentionally not implemented in this release.** The 3 new `iconography-*` rules and any v1.6.0 `image-generation-*` rules are present in the vendored spec metadata but their runtime checks are deferred to a follow-up validator release. For now, brand repos containing iconography metadata or an `image-generation/` directory are tolerated; their file contents are not validated against the new rules.

Backward-compatible for consumers: existing API surface unchanged. All three real-world brands (next90-brand, gramatr-brand, lean-media-brand) validate clean against v1.6.1 with zero errors.

## 0.1.4

Sync vendored brand-spec to v1.5.0. v1.5 adds a new top-level `data-viz/` layer (single canonical home for chart palettes, axis behavior, and data-role color assignment), plus 5 new validation rules (`data-viz-color-tokens-resolve`, `data-viz-no-hex-redeclaration`, `data-viz-categorical-distinguishability`, `data-viz-sequential-monotonic`, `data-viz-framework-presence`).

**No validator code changes required.** v1.5's additions are schema-additive: no new severity levels, no new field types the existing Zod model rejects. The vendored `brand.yaml` parses cleanly and all 20 existing tests pass unchanged.

**New rule logic intentionally not implemented in this release.** The 5 new `data-viz-*` rules are present in the vendored spec metadata but their runtime checks (color-token resolution, hex-literal redeclaration detection, ΔE distinguishability, monotonic ordering, framework-doc presence) are deferred to a follow-up validator release. For now, brand repos containing a `data-viz/` directory are tolerated and counted as a recognized layer, but file contents are not validated against the new rules.

Backward-compatible for consumers: existing API surface unchanged. All three real-world brands (next90-brand, gramatr-brand, lean-media-brand) validate clean against v1.5 with zero errors. Layer count reported by the validator increases from 16 to 17 to reflect the new `data-viz/` layer.

## 0.1.3

Sync vendored brand-spec to v1.4.0. v1.4 adds a new top-level `journey/` layer (KYKC — Know Your Knowledge Customer), a new `methodology_provenance:` frontmatter convention, and 5 new validation rules (`journey-stage-slug-resolves`, `journey-stages-monotonic-order`, etc.).

**No validator code changes required.** v1.4's additions are schema-additive: no new severity levels, no new field types the existing Zod model rejects. The vendored `brand.yaml` parses cleanly and all 20 existing tests pass unchanged.

**New rule logic intentionally not implemented in this release.** The 5 new `journey-*` rules are present in the vendored spec metadata but their runtime checks are deferred to a follow-up validator release (likely v0.1.4 or v0.2.0). For now, brand repos containing a `journey/` directory are tolerated (not flagged as unrecognized) but its contents are not validated against the new rules.

Backward-compatible for consumers: existing API surface unchanged. All three real-world brands (next90-brand, gramatr-brand, lean-media-brand) validate clean against v1.4 with zero errors. lean-media-brand now ships a `journey/` directory which the validator silently tolerates.

## 0.1.2

Sync vendored brand-spec to v1.3.0. v1.3 introduced a third validation severity (`info`) for non-blocking, advisory rules (e.g., quoted-voice callout skipped, drift-detection section recommended) — required validator code changes:

- `Severity` type now `'error' | 'warning' | 'info'`.
- `ValidationResult` gains an `infos: ValidationIssue[]` field.
- `IssueCollector` gains an `info()` method.
- Reporter renders info messages with `ℹ` symbol; suppressed by `--quiet`; counted in summary tail when present.
- Zod schema for validation rules now accepts `info` severity.
- Info-severity issues do not affect exit code (same as warnings).

Backward-compatible for consumers: existing `errors`/`warnings` fields unchanged; `infos` is additive.

All three real-world brands (next90-brand, gramatr-brand, lean-media-brand) validate clean against v1.3 with zero errors.

## 0.1.1

Sync vendored brand-spec to v1.2.1. Adds awareness of `wordmark:` frontmatter and PNG/SVG format-preference convention. No validator code changes; both additions are additive recommendations not enforced rules.

## 0.1.0 (unreleased)

Initial release. Targets brand-spec **v1.2** (contract `gramatr.brand@1.2.0`).

- Library API: `validateBrand(brandPath, { specPath })` returning `ValidationResult`.
- CLI: `brand-spec-validate` with `--spec`, `--format human|json`, `--quiet`, `--no-freshness`.
- Rule registry derived at runtime from `brand.yaml`'s `layers:` and `validation:` blocks.
- Per-rule unit fixtures + integration tests against three real production brand repos (env-var-gated).
- See [`docs/rules.md`](./docs/rules.md) for the rule list and documented leniences.
