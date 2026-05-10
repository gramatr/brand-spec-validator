# Contributing to @gramatr/brand-spec-validator

## Development setup

```bash
npm install
npm test
npm run lint
npm run typecheck
```

The test suite runs against the brand-spec that ships vendored in this
repo (`vendor/brand-spec/brand.yaml`) — no external checkout required.

## Spec version + sync

This validator is **pinned to a specific brand-spec version per release**.
The current version is recorded in the README and in the CHANGELOG, and
the contract YAML itself lives at `vendor/brand-spec/brand.yaml`.

**Why pinned:** the validator's rule logic is written against an exact
contract. A breaking spec change (new required field, removed layer,
renamed rule) needs a corresponding validator change. Mixing a v0.1
validator with a v1.3 spec at runtime would silently miss new rules or
crash on shape mismatches. Pinning makes the supported version
explicit and version-bumped releases the upgrade story.

### Bumping the supported spec version

When upstream `gramatr/brand-spec` ships a new version that this
validator should support:

1. Run the sync script:
   ```bash
   ./scripts/sync-spec.sh main        # or a specific tag, e.g. v1.3
   ```
2. Inspect the diff: `git diff vendor/brand-spec/brand.yaml`
3. Update validator rule logic / `src/schema/types.ts` for any breaking
   changes in the spec.
4. Run the full suite: `npm test`. The `vendored-spec.test.ts` sanity
   test catches obvious parse/shape breakage; the per-rule tests catch
   semantic drift.
5. Bump `package.json` version (semver — minor for additive spec
   changes the validator now enforces; major for breaking changes).
6. Update the README's "Supported brand-spec version" note.
7. Update CHANGELOG.md with what changed.
8. Open a PR titled `chore(spec): bump brand-spec to vX.Y`.

### Why vendored, not fetched at runtime

We deliberately do not fetch `brand.yaml` over the network at install
or runtime. Reasons:
- offline / air-gapped CI must work
- `npm install` shouldn't make network calls beyond the registry
- the validator's behavior should be reproducible from a `package.json`
  + `package-lock.json` alone, without depending on a moving GitHub URL

Future work (v0.2.0+) may publish `@gramatr/brand-spec` as its own npm
package and consume it as a normal dependency, which is the cleanest
long-term answer. Until then, vendoring + a sync script is the
explicit, reviewable mechanism.
