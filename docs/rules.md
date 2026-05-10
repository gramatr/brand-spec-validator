# Validation rules

The validator's rule set is **derived from `brand-spec/brand.yaml` at runtime** — when the spec adds a rule, the validator picks it up automatically. This page documents what v0.1.0 enforces against brand-spec **v1.2**.

## Per-file checks (run on every layer file declared in the spec)

| Rule ID | Severity | Description |
|---|---|---|
| `layer:{layer}:required-file` | error | A file marked `required: true` in `brand.yaml` is missing. |
| `layer:{layer}:required-dir` | error | A directory marked `required: true` is missing. |
| `layer:{layer}:required-subdir` | error | A required sub-directory inside a layer dir is missing. |
| `layer:{layer}:min-files` | error | A pattern entry with `min_files: N` matched fewer than N files. |
| `layer:{layer}:glob-min` | error | A glob entry with `min_files: N` matched fewer than N files. |
| `layer:{layer}:frontmatter` | error / warn | Required frontmatter field missing, enum value invalid, or type mismatch. See "Leniences" below. |
| `frontmatter-parses` | error | A `---`-delimited frontmatter block exists but is not valid YAML, or is not a mapping. |
| `data-files-yaml` | error | A `data/*.yaml` file is not valid YAML. |
| `frontmatter-common-enum` | warn | A common-fields enum (`status`, `visibility`, `source_authority.status`, `source_authority.refresh.cadence`) value is out of range. Demoted to warning — see "Leniences". |

## Cross-layer rules (from `brand.yaml`'s `validation:` block)

| Rule ID | Severity | Description |
|---|---|---|
| `identity-required` | error | Enforced via `layer:identity:required-file`. |
| `voice-required` | error | Brand must have either `voice.md` or `voice/` directory. |
| `voice-pattern-exclusive` | error | `voice.md` and `voice/` cannot both exist. |
| `voice-multi-register-index` | error | `voice/` requires exactly one of `README.md`/`_index.md` and ≥1 file under `voice/registers/` with `register` and `applies_to` populated. |
| `vocabulary-required` | error | Enforced via `layer:vocabulary:required-file`. |
| `design-tokens-required` | error | Enforced via `layer:design:required-file` and `layer:design:required-dir`. |
| `messaging-audience-min` | error | Enforced via `layer:messaging:min-files` (≥1 `for-{audience}.md`). |
| `agent-context-priority-layers-resolve` | error | Each `priority_layers` entry in `agent-context.md` must name a real layer. |
| `prompt-example-when-validated` | error | A prompt with `validated: true` must list ≥1 example path that exists. |
| `ui-tokens-layer-order` | error | `semantic.md` requires `primitives.md`; `component.md` requires `semantic.md`. |
| `ui-tokens-depends-on-resolves` | error | Each `depends-on` entry must resolve to a sibling under `ui-tokens/`. |
| `source-authority-upstream-required` | error | `status: mirror | historical` requires `upstream` (path that exists OR well-formed URL). |
| `source-authority-notes-required` | error | `status: historical | fixture-only` requires non-empty `notes`. |
| `source-authority-mirror-freshness-warn` | warn | `weekly` cadence stale after 14 days; `monthly` after 60. |
| `visibility-default-public` | (implicit) | Files without `visibility` are treated as public — no rule fires. |
| `visibility-audience-internal-backcompat` | warn | `audience: internal` on `proof/competitive.md` triggers a migration warning. |
| `proof-freshness-warn` | warn | Files under `proof/` with `last_updated` older than 180 days. |
| `design-specs-freshness-warn` | warn | Files under `design/` with `last_updated` older than 90 days. |
| `sample-status-tolerates-placeholders` | (implicit) | Files with `status: sample` skip strict value validation. |

## Leniences (validator deviates from a strict reading of brand.yaml)

These are pragmatic accommodations grounded in real v1.2 brand patterns. Each is a v1.3 spec candidate.

1. **`version` accepts string OR number.** Spec types it `string` ("e.g., '1.0', '1.0.0'"), but real brands write `version: 1.0` unquoted, which YAML coerces to a number. Both accepted.
2. **Single-string shorthand for declared-array fields.** Real brands write `depends-on: primitives.md` (string) instead of `depends-on: [primitives.md]`. Auto-promoted.
3. **`status` enum violations demoted to warning.** Real brands use `status` for free-form review state on `examples/` files (e.g., `"reference — validated by human review"`); the spec's lifecycle enum doesn't fit. Surfaced as warning, not error.
4. **`last_updated` and `example_type` "required" demoted to warning.** All three production v1.2 brands omit these. Demotion keeps the signal without blocking ingest.
5. **`perspective` accepts `*-plural` variants.** Real brands use `first-person-plural`. Surfaced as warning ("v1.3 candidate").

## Not yet implemented

- **`persona-audience-coverage`** — declared as warning in `brand.yaml`. v0.2 candidate.
- **Recursive freshness for `data/*.yaml`** — spec mentions per-file `refresh.cadence` for data files, but real brands attach `last_updated` at the YAML root rather than via `source_authority.refresh`. Not surfaced as a warning until convention solidifies.
- **`design-tokens-required` standalone rule ID** — currently enforced via the layer's `required-file`/`required-dir` checks; emit a single rolled-up rule ID in v0.2.
