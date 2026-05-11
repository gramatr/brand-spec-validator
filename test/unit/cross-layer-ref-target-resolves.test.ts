/**
 * Unit tests for the cross-layer-ref-target-resolves rule (v1.7).
 *
 * Fixtures are constructed in tmpdir per test (no specific brand
 * identifiers in source).
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { IssueCollector } from '../../src/result.js';
import { validateCrossLayerRefTargets } from '../../src/rules/v17/cross-layer-ref-target-resolves.js';
import { loadBrandSpec } from '../../src/schema/load.js';

async function mktmp(): Promise<string> {
  return fs.mkdtemp(path.join(os.tmpdir(), 'bsv-clr-'));
}

async function write(root: string, rel: string, content: string): Promise<void> {
  const abs = path.join(root, rel);
  await fs.mkdir(path.dirname(abs), { recursive: true });
  await fs.writeFile(abs, content, 'utf-8');
}

describe('cross-layer-ref-target-resolves', () => {
  let root: string;
  beforeEach(async () => {
    root = await mktmp();
  });

  it('passes when *_refs targets resolve as layer names', async () => {
    await write(
      root,
      'agent-context.md',
      '---\npriority_layers_refs:\n  - identity\n  - voice\n  - vocabulary\n---\n# ctx\n',
    );
    const spec = await loadBrandSpec();
    const collector = new IssueCollector();
    await validateCrossLayerRefTargets(root, spec, collector);
    expect(collector.errors).toEqual([]);
  });

  it('passes when *_ref target is an existing file path', async () => {
    await write(root, 'design/photography-treatment.md', '# treatment\n');
    await write(
      root,
      'image-generation/style.md',
      '---\nphotography_treatment_ref: design/photography-treatment.md\n---\n# style\n',
    );
    const spec = await loadBrandSpec();
    const collector = new IssueCollector();
    await validateCrossLayerRefTargets(root, spec, collector);
    expect(collector.errors).toEqual([]);
  });

  it('errors when *_refs entry is neither a layer nor an existing file', async () => {
    await write(
      root,
      'agent-context.md',
      '---\npriority_layers_refs:\n  - identity\n  - not-a-real-layer\n---\n# ctx\n',
    );
    const spec = await loadBrandSpec();
    const collector = new IssueCollector();
    await validateCrossLayerRefTargets(root, spec, collector);
    expect(collector.errors.length).toBe(1);
    expect(collector.errors[0]?.ruleId).toBe('cross-layer-ref-target-resolves');
    expect(collector.errors[0]?.message).toContain('not-a-real-layer');
  });

  it('errors when *_ref file path does not exist', async () => {
    await write(
      root,
      'image-generation/style.md',
      '---\nphotography_treatment_ref: design/missing.md\n---\n# style\n',
    );
    const spec = await loadBrandSpec();
    const collector = new IssueCollector();
    await validateCrossLayerRefTargets(root, spec, collector);
    expect(collector.errors.length).toBe(1);
    expect(collector.errors[0]?.message).toContain('design/missing.md');
  });

  it('emits warn (not error) for token-shaped values per v1.7 spec', async () => {
    await write(
      root,
      'design/colors.md',
      '---\nprimary_color_ref: --color-brand-primary\n---\n# colors\n',
    );
    const spec = await loadBrandSpec();
    const collector = new IssueCollector();
    await validateCrossLayerRefTargets(root, spec, collector);
    expect(collector.errors).toEqual([]);
    expect(collector.warnings.length).toBe(1);
    expect(collector.warnings[0]?.ruleId).toBe('cross-layer-ref-target-resolves');
    expect(collector.warnings[0]?.message).toContain('token-shaped');
  });

  it('skips applies_to_refs (channel slugs, not refs) per non-resolving exemption', async () => {
    await write(
      root,
      'voice/registers/marketing.md',
      '---\nregister: marketing\napplies_to_refs:\n  - website\n  - blog\n---\n# m\n',
    );
    const spec = await loadBrandSpec();
    const collector = new IssueCollector();
    await validateCrossLayerRefTargets(root, spec, collector);
    expect(collector.errors).toEqual([]);
  });

  it('accepts well-formed URL values', async () => {
    await write(
      root,
      'identity.md',
      '---\nupstream_ref: https://example.com/upstream.md\n---\n# id\n',
    );
    const spec = await loadBrandSpec();
    const collector = new IssueCollector();
    await validateCrossLayerRefTargets(root, spec, collector);
    expect(collector.errors).toEqual([]);
  });
});
