# Changelog

## 0.2.0

**Note:** package.json version was originally left at 0.1.5 when the v0.2.0 tag was created; corrected in this commit. The v0.2.0 tag is force-re-tagged at the new HEAD post-merge.

**New subsystem: body-parse.** Validator now parses markdown body content (post-frontmatter) into structured shapes — sections, fenced code blocks, GFM tables, and inline values (hex/rgb/hsl literals, inline code, links, URLs) — under `src/body-parse/`. Built on `unified` + `remark-parse` + `remark-gfm`; per-validator-run cache (`BodyCache`) so files scanned by multiple rules are parsed at most once. Public API:

```ts
import { parseBody, BodyCache } from '@gramatr/brand-spec-validator';
const body = await parseBody(filePath);
body.findInlineValues({ type: 'hex', excludeCode: true });
body.findSection({ heading: 'What this allows' });
body.tables[0].headers;
```

**Why a minor bump (0.2.0) and not a patch (0.1.6).** The public TypeScript API surface is unchanged — `validateBrand()` returns the same `ValidationResult` shape. But validator BEHAVIOR expands materially: 4 previously-deferred rules now actually fire. Brand repos that passed cleanly under v0.1.5 may surface new findings (mostly info-severity advisories). For ingest pipelines that key off `result.errors.length` only, behavior is unchanged for the 3 reference brands; for pipelines that observe warnings/infos, expect new signal. A patch bump would understate the visible change for downstream consumers.

**Rules implemented (4 of 8 deferrals from RFC #11):**

- `register-inheritance-cannot-subtract` (severity: error, brand-spec v1.3) — scans voice-register body for forbidden-term redeclarations under "What this allows" / "permitted" sections; ignores "What does NOT fit" sections and `> Quoted:` callouts.
- `data-viz-no-hex-redeclaration` (severity: warn, brand-spec v1.5) — scans `data-viz/*.md` body for hex / rgb / hsl literals; exempts literals inside fenced code blocks and `> Quoted:` callouts (illustrative, not authoritative claims).
- `data-viz-framework-presence` (severity: info, brand-spec v1.5) — when `data-viz/_framework.md` exists, checks that body covers expected topics (scope, consumption model, token-reference convention).
- `iconography-set-resolves` (severity: info, brand-spec v1.6.1) — when `design/iconography.md` declares a custom `icon_set`, scans `design/icons/` for source files and `_manifest.md`; recognizes well-known public libraries (lucide, material-symbols, heroicons, fontawesome, phosphor, tabler, feather, octicons, bootstrap-icons) and skips the local-files check for them.

**Rules deferred to v0.2.x patches:**

- `data-viz-categorical-distinguishability` (brand-spec v1.5) — needs ΔE color-distance computation; lands when a perceptual color library (e.g., `culori`) is justified.
- `data-viz-sequential-monotonic` (brand-spec v1.5) — needs perceptual-luminance ordering check; same dependency consideration as distinguishability.
- `themes-controlled-vocabulary-warn` (brand-spec v1.6, image-gen) — needs a baseline themes vocabulary surface that the spec itself has not yet stabilized.
- `cross-layer-ref-target-resolves` token sub-rule (brand-spec v1.7) — needs `design-tokens.md` to expose a structured token list. Currently this file is markdown prose; the spec-level v2 gap (machine-readable design-tokens companion) blocks meaningful enforcement. Body-parse can extract token names from prose, but resolution accuracy is bounded by prose quality. Patch will land an opt-in heuristic resolver once the spec settles.

**Tests.** 22 new unit tests across body-parse subsystem (10) and per-rule fixtures (12), covering passing, failing, and code-block/quoted-callout exemption edge cases.

**Real-brand impact (3 brands, env-var configured):** validator output below assumes `BRAND_SPEC_TEST_BRANDS` is set. All 3 brands continue to report 0 errors. One brand picks up 1 new info-severity advisory (data-viz framework topic coverage); the other two are unchanged from v0.1.5 because they do not exercise the body-parse code paths (no `data-viz/`, no custom `icon_set`, no register-inheritance violations).

**Closes:** RFC gramatr/brand-spec-validator#11 (Option B accepted — build the subsystem, implement highest-value rules first).

## 0.1.5

**Privacy scrub:** removed specific brand identifiers from this public package. Integration tests are now configured via `BRAND_SPEC_TEST_BRANDS` (comma-separated) instead of a hardcoded array. README, code comments, and CHANGELOG entries no longer name specific adopter brands. Operationally identical for users; nothing in this package now reveals which specific brands are being tested against. Note: prior published versions (v0.1.0 – v0.1.4) and git history still contain the historical references; only forward bleed is stopped here.

Sync vendored brand-spec to v1.6.1. v1.6.1 is a PATCH bump that extends the existing `design/` layer with iconography conventions: a new `templates/empty-brand/design/iconography.md` template, plus 3 new validation rules (`iconography-set-resolves`, `iconography-sizing-references-resolve`, `iconography-decorative-distinction-recommended`).

**No validator code changes required.** v1.6.1 is purely additive within the existing `design/` layer — no new top-level layers, no new severity levels, no new field types the existing Zod model rejects. The vendored `brand.yaml` parses cleanly and all 20 existing tests pass unchanged.

**Note:** This release also rolls forward through v1.6.0 (which introduced a new top-level `image-generation/` layer); no separate v1.6.0 validator sync was published. Layer count reported by the validator therefore increases from 17 to 18 in this release (reflecting the v1.6.0 `image-generation/` layer). The v1.6.1 iconography extensions live inside the existing `design/` layer and do not change the layer count on their own.

**New rule logic intentionally not implemented in this release.** The 3 new `iconography-*` rules and any v1.6.0 `image-generation-*` rules are present in the vendored spec metadata but their runtime checks are deferred to a follow-up validator release. For now, brand repos containing iconography metadata or an `image-generation/` directory are tolerated; their file contents are not validated against the new rules.

Backward-compatible for consumers: existing API surface unchanged. All three real-world adopter brands (env-var-configured per `BRAND_SPEC_TEST_BRANDS`) validate clean against v1.6.1 with zero errors.

## 0.1.4

Sync vendored brand-spec to v1.5.0. v1.5 adds a new top-level `data-viz/` layer (single canonical home for chart palettes, axis behavior, and data-role color assignment), plus 5 new validation rules (`data-viz-color-tokens-resolve`, `data-viz-no-hex-redeclaration`, `data-viz-categorical-distinguishability`, `data-viz-sequential-monotonic`, `data-viz-framework-presence`).

**No validator code changes required.** v1.5's additions are schema-additive: no new severity levels, no new field types the existing Zod model rejects. The vendored `brand.yaml` parses cleanly and all 20 existing tests pass unchanged.

**New rule logic intentionally not implemented in this release.** The 5 new `data-viz-*` rules are present in the vendored spec metadata but their runtime checks (color-token resolution, hex-literal redeclaration detection, ΔE distinguishability, monotonic ordering, framework-doc presence) are deferred to a follow-up validator release. For now, brand repos containing a `data-viz/` directory are tolerated and counted as a recognized layer, but file contents are not validated against the new rules.

Backward-compatible for consumers: existing API surface unchanged. All three real-world adopter brands (env-var-configured per `BRAND_SPEC_TEST_BRANDS`) validate clean against v1.5 with zero errors. Layer count reported by the validator increases from 16 to 17 to reflect the new `data-viz/` layer.

## 0.1.3

Sync vendored brand-spec to v1.4.0. v1.4 adds a new top-level `journey/` layer (KYKC — Know Your Knowledge Customer), a new `methodology_provenance:` frontmatter convention, and 5 new validation rules (`journey-stage-slug-resolves`, `journey-stages-monotonic-order`, etc.).

**No validator code changes required.** v1.4's additions are schema-additive: no new severity levels, no new field types the existing Zod model rejects. The vendored `brand.yaml` parses cleanly and all 20 existing tests pass unchanged.

**New rule logic intentionally not implemented in this release.** The 5 new `journey-*` rules are present in the vendored spec metadata but their runtime checks are deferred to a follow-up validator release (likely v0.1.4 or v0.2.0). For now, brand repos containing a `journey/` directory are tolerated (not flagged as unrecognized) but its contents are not validated against the new rules.

Backward-compatible for consumers: existing API surface unchanged. All three real-world adopter brands (env-var-configured per `BRAND_SPEC_TEST_BRANDS`) validate clean against v1.4 with zero errors. One of the adopter brands now ships a `journey/` directory which the validator silently tolerates.

## 0.1.2

Sync vendored brand-spec to v1.3.0. v1.3 introduced a third validation severity (`info`) for non-blocking, advisory rules (e.g., quoted-voice callout skipped, drift-detection section recommended) — required validator code changes:

- `Severity` type now `'error' | 'warning' | 'info'`.
- `ValidationResult` gains an `infos: ValidationIssue[]` field.
- `IssueCollector` gains an `info()` method.
- Reporter renders info messages with `ℹ` symbol; suppressed by `--quiet`; counted in summary tail when present.
- Zod schema for validation rules now accepts `info` severity.
- Info-severity issues do not affect exit code (same as warnings).

Backward-compatible for consumers: existing `errors`/`warnings` fields unchanged; `infos` is additive.

All three real-world adopter brands (env-var-configured per `BRAND_SPEC_TEST_BRANDS`) validate clean against v1.3 with zero errors.

## 0.1.1

Sync vendored brand-spec to v1.2.1. Adds awareness of `wordmark:` frontmatter and PNG/SVG format-preference convention. No validator code changes; both additions are additive recommendations not enforced rules.

## 0.1.0 (unreleased)

Initial release. Targets brand-spec **v1.2** (contract `gramatr.brand@1.2.0`).

- Library API: `validateBrand(brandPath, { specPath })` returning `ValidationResult`.
- CLI: `brand-spec-validate` with `--spec`, `--format human|json`, `--quiet`, `--no-freshness`.
- Rule registry derived at runtime from `brand.yaml`'s `layers:` and `validation:` blocks.
- Per-rule unit fixtures + integration tests against real production brand repos (env-var-gated; brand directory names supplied at test time, not vendored).
- See [`docs/rules.md`](./docs/rules.md) for the rule list and documented leniences.
