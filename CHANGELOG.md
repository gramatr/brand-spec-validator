# Changelog

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
