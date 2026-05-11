/**
 * Unit tests for structured-references-kind-valid (v1.7).
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { IssueCollector } from '../../src/result.js';
import { validateStructuredReferencesKind } from '../../src/rules/v17/structured-references-kind-valid.js';

async function mktmp(): Promise<string> {
  return fs.mkdtemp(path.join(os.tmpdir(), 'bsv-srk-'));
}

async function write(root: string, rel: string, content: string): Promise<void> {
  const abs = path.join(root, rel);
  await fs.mkdir(path.dirname(abs), { recursive: true });
  await fs.writeFile(abs, content, 'utf-8');
}

describe('structured-references-kind-valid', () => {
  let root: string;
  beforeEach(async () => {
    root = await mktmp();
  });

  it('passes when references entries declare valid kind/type/target', async () => {
    await write(
      root,
      'image-generation/style.md',
      [
        '---',
        'references:',
        '  treatment:',
        '    type: file',
        '    target: design/photography-treatment.md',
        '    kind: cites',
        '  primary_color:',
        '    type: token',
        '    target: --color-brand-primary',
        '    kind: requires',
        '---',
        '# style',
      ].join('\n'),
    );
    const collector = new IssueCollector();
    await validateStructuredReferencesKind(root, collector);
    expect(collector.errors).toEqual([]);
  });

  it('errors when kind is not in [requires, recommends, cites]', async () => {
    await write(
      root,
      'identity.md',
      [
        '---',
        'references:',
        '  bad:',
        '    type: file',
        '    target: README.md',
        '    kind: see-also',
        '---',
        '# id',
      ].join('\n'),
    );
    const collector = new IssueCollector();
    await validateStructuredReferencesKind(root, collector);
    expect(collector.errors.length).toBe(1);
    expect(collector.errors[0]?.ruleId).toBe('structured-references-kind-valid');
    expect(collector.errors[0]?.message).toContain('see-also');
  });

  it('errors when type is not in the allowed enum', async () => {
    await write(
      root,
      'identity.md',
      [
        '---',
        'references:',
        '  bad:',
        '    type: blob',
        '    target: README.md',
        '    kind: cites',
        '---',
        '# id',
      ].join('\n'),
    );
    const collector = new IssueCollector();
    await validateStructuredReferencesKind(root, collector);
    expect(collector.errors.length).toBe(1);
    expect(collector.errors[0]?.message).toContain('blob');
  });

  it('errors when an entry omits kind/target/type', async () => {
    await write(
      root,
      'identity.md',
      ['---', 'references:', '  bad:', '    type: file', '---', '# id'].join('\n'),
    );
    const collector = new IssueCollector();
    await validateStructuredReferencesKind(root, collector);
    const ids = collector.errors.map((e) => e.message);
    expect(ids.some((m) => m.includes('target'))).toBe(true);
    expect(ids.some((m) => m.includes('kind'))).toBe(true);
  });

  it('warns when entries appears with type other than layer-entries', async () => {
    await write(
      root,
      'identity.md',
      [
        '---',
        'references:',
        '  bad:',
        '    type: file',
        '    target: README.md',
        '    kind: cites',
        '    entries: [a, b]',
        '---',
        '# id',
      ].join('\n'),
    );
    const collector = new IssueCollector();
    await validateStructuredReferencesKind(root, collector);
    expect(collector.warnings.length).toBe(1);
    expect(collector.warnings[0]?.message).toContain('entries');
  });

  it('is a no-op when no references block is present', async () => {
    await write(root, 'identity.md', '---\nstatus: active\n---\n# id\n');
    const collector = new IssueCollector();
    await validateStructuredReferencesKind(root, collector);
    expect(collector.errors).toEqual([]);
    expect(collector.warnings).toEqual([]);
  });
});
