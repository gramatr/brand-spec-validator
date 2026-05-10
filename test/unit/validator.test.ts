import { describe, it, expect } from 'vitest';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateBrand } from '../../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FIXTURES = path.resolve(__dirname, '..', 'fixtures');

function fixture(name: string) {
  return path.join(FIXTURES, name);
}

async function run(name: string) {
  // Uses the vendored brand-spec that ships with this package.
  return validateBrand(fixture(name));
}

describe('valid fixtures', () => {
  it('valid-minimal has zero errors', async () => {
    const r = await run('valid-minimal');
    expect(r.errors).toEqual([]);
  });

  it('valid-multi-register has zero errors', async () => {
    const r = await run('valid-multi-register');
    expect(r.errors).toEqual([]);
  });
});

describe('invalid fixtures — each rule', () => {
  it('missing identity.md → identity required error', async () => {
    const r = await run('invalid-missing-required');
    const ids = r.errors.map((e) => e.ruleId);
    expect(ids).toContain('layer:identity:required-file');
  });

  it('malformed frontmatter → frontmatter-parses error', async () => {
    const r = await run('invalid-frontmatter');
    const ids = r.errors.map((e) => e.ruleId);
    expect(ids).toContain('frontmatter-parses');
  });

  it('voice.md AND voice/ both present → voice-pattern-exclusive error', async () => {
    const r = await run('invalid-voice-both');
    const ids = r.errors.map((e) => e.ruleId);
    expect(ids).toContain('voice-pattern-exclusive');
  });

  it('prompt validated:true with no examples → prompt-example-when-validated error', async () => {
    const r = await run('invalid-prompt-validated');
    const ids = r.errors.map((e) => e.ruleId);
    expect(ids).toContain('prompt-example-when-validated');
  });

  it('semantic.md without primitives.md → ui-tokens-layer-order error', async () => {
    const r = await run('invalid-ui-tokens-order');
    const ids = r.errors.map((e) => e.ruleId);
    expect(ids).toContain('ui-tokens-layer-order');
  });

  it('semantic.md depends-on missing primitives → ui-tokens-depends-on-resolves error', async () => {
    const r = await run('invalid-ui-tokens-order');
    const ids = r.errors.map((e) => e.ruleId);
    expect(ids).toContain('ui-tokens-depends-on-resolves');
  });

  it('source_authority mirror without upstream → source-authority-upstream-required error', async () => {
    const r = await run('invalid-source-authority');
    const ids = r.errors.map((e) => e.ruleId);
    expect(ids).toContain('source-authority-upstream-required');
  });

  it('agent-context priority_layers entry not a real layer → agent-context-priority-layers-resolve error', async () => {
    const r = await run('invalid-agent-context-priority');
    const ids = r.errors.map((e) => e.ruleId);
    expect(ids).toContain('agent-context-priority-layers-resolve');
  });

  it('malformed YAML in data/ → data-files-yaml error', async () => {
    const r = await run('invalid-data-yaml');
    const ids = r.errors.map((e) => e.ruleId);
    expect(ids).toContain('data-files-yaml');
  });
});
