# @gramatr/brand-spec-validator

Reference TypeScript validator for the [gramatr/brand-spec](https://github.com/gramatr/brand-spec) brand definition standard.

Walks a brand repo, parses every documented layer against `brand.yaml`, and reports errors (schema violations) and warnings (freshness, drift, recommended-but-missing).

**Schema compatibility:** brand-spec **v1.2** (contract `gramatr.brand@1.2.0`).

## Install

```bash
npm install @gramatr/brand-spec-validator
# or, for the CLI:
npm install -g @gramatr/brand-spec-validator
```

> Not yet published. Use directly from this repo via `npm link` or `npx tsx src/cli.ts` until the first release.

## CLI

```bash
brand-spec-validate /path/to/brand-repo
```

Options:

| Flag | Default | Description |
|---|---|---|
| `--spec <path>` | `../brand-spec` | Path to a checkout of the `gramatr/brand-spec` repo (we read its `brand.yaml`). |
| `--format <fmt>` | `human` | `human` or `json`. |
| `--quiet` | off | Suppress warnings; show errors only. |
| `--no-freshness` | off | Skip freshness warning rules. |

Exit codes:

- `0` — no errors (warnings allowed)
- `1` — at least one error
- `2` — validator failed (couldn't load spec, couldn't read brand repo)

Example:

```
$ brand-spec-validate /home/me/work/my-brand --spec /home/me/work/brand-spec
✗ identity.md: missing required frontmatter field: tagline [layers:identity]
⚠ proof/proof-points.md: last_updated 2025-08-01 is older than 180 days [proof-freshness-warn]
✓ 14 of 15 layers valid
1 error, 1 warning
```

## Library API

```ts
import { validateBrand } from '@gramatr/brand-spec-validator';

const result = await validateBrand('/path/to/brand-repo', {
  specPath: '/path/to/brand-spec',
});

if (result.errors.length > 0) {
  for (const err of result.errors) console.error(err.ruleId, err.path, err.message);
  process.exit(1);
}
```

`ValidationResult`:

```ts
interface ValidationResult {
  brandPath: string;
  schemaVersion: string;          // e.g., "1.2.0"
  errors: ValidationIssue[];
  warnings: ValidationIssue[];
  layersChecked: number;
  layersValid: number;
}

interface ValidationIssue {
  severity: 'error' | 'warning';
  ruleId: string;                 // e.g., 'identity-required', 'proof-freshness-warn'
  path: string;                   // file/dir relative to brand root, '' for repo-level
  message: string;
}
```

## What gets validated

Rules are derived from `brand-spec/brand.yaml` at runtime — when the spec adds a rule, the validator picks it up. See [`docs/rules.md`](./docs/rules.md) for the rendered list.

Categories:

1. **Required layers exist** at documented paths.
2. **`min_files` thresholds** met for pattern-based directories (e.g., at least one `messaging/for-{audience}.md`).
3. **Frontmatter parses** as YAML.
4. **Required frontmatter fields** present per file type.
5. **Enum values match** schema (e.g., `status`, `perspective`, `register`, `visibility`, `source_authority.status`).
6. **Cross-layer rules** from `brand.yaml`'s `validation:` block — voice pattern exclusivity, agent-context priority resolution, source-authority upstream/notes, prompt-validated example presence, ui-tokens layer ordering, ui-tokens depends-on resolution, etc.

## Development

```bash
npm install
npm run build
npm test
npm run lint
```

Integration tests against real brand repos are env-var-gated:

```bash
BRAND_SPEC_TEST_BRANDS_DIR=/home/me/work npm test
```

When `BRAND_SPEC_TEST_BRANDS_DIR` is set, the integration suite looks for `next90-brand`, `gramatr-brand`, and `lean-media-brand` subdirectories and validates each. They MUST report zero errors — they are the conformance reference.

## Versioning

Schema versions are tracked alongside validator releases. v0.1.x of this validator targets brand-spec v1.2.

## License

MIT.
