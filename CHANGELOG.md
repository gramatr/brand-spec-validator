# Changelog

## 0.1.1

Sync vendored brand-spec to v1.2.1. Adds awareness of `wordmark:` frontmatter and PNG/SVG format-preference convention. No validator code changes; both additions are additive recommendations not enforced rules.

## 0.1.0 (unreleased)

Initial release. Targets brand-spec **v1.2** (contract `gramatr.brand@1.2.0`).

- Library API: `validateBrand(brandPath, { specPath })` returning `ValidationResult`.
- CLI: `brand-spec-validate` with `--spec`, `--format human|json`, `--quiet`, `--no-freshness`.
- Rule registry derived at runtime from `brand.yaml`'s `layers:` and `validation:` blocks.
- Per-rule unit fixtures + integration tests against three real production brand repos (env-var-gated).
- See [`docs/rules.md`](./docs/rules.md) for the rule list and documented leniences.
