/**
 * Unit tests for legacy-ref-field-migration-recommended (v1.7, info).
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { IssueCollector } from '../../src/result.js';
import { validateLegacyRefFieldMigration } from '../../src/rules/v17/legacy-ref-field-migration.js';

async function mktmp(): Promise<string> {
  return fs.mkdtemp(path.join(os.tmpdir(), 'bsv-legacy-'));
}

async function write(root: string, rel: string, content: string): Promise<void> {
  const abs = path.join(root, rel);
  await fs.mkdir(path.dirname(abs), { recursive: true });
  await fs.writeFile(abs, content, 'utf-8');
}

describe('legacy-ref-field-migration-recommended', () => {
  let root: string;
  beforeEach(async () => {
    root = await mktmp();
  });

  it('fires when priority_layers (legacy) is used', async () => {
    await write(
      root,
      'agent-context.md',
      '---\npriority_layers:\n  - identity\n  - voice\n---\n# ctx\n',
    );
    const collector = new IssueCollector();
    await validateLegacyRefFieldMigration(root, collector);
    expect(collector.infos.length).toBe(1);
    expect(collector.infos[0]?.ruleId).toBe('legacy-ref-field-migration-recommended');
    expect(collector.infos[0]?.message).toContain('priority_layers_refs');
  });

  it('fires when applies_to (legacy) is used in a register file', async () => {
    await write(
      root,
      'voice/registers/marketing.md',
      '---\nregister: marketing\napplies_to:\n  - website\n---\n# m\n',
    );
    const collector = new IssueCollector();
    await validateLegacyRefFieldMigration(root, collector);
    expect(collector.infos.length).toBe(1);
    expect(collector.infos[0]?.message).toContain('applies_to_refs');
  });

  it('fires when source_authority.upstream (legacy nested) is used', async () => {
    await write(
      root,
      'identity.md',
      '---\nsource_authority:\n  status: mirror\n  upstream: ../upstream.md\n---\n# id\n',
    );
    const collector = new IssueCollector();
    await validateLegacyRefFieldMigration(root, collector);
    expect(collector.infos.length).toBe(1);
    expect(collector.infos[0]?.message).toContain('source_authority.upstream_ref');
  });

  it('does NOT fire when canonical priority_layers_refs is used', async () => {
    await write(root, 'agent-context.md', '---\npriority_layers_refs:\n  - identity\n---\n# ctx\n');
    const collector = new IssueCollector();
    await validateLegacyRefFieldMigration(root, collector);
    expect(collector.infos).toEqual([]);
  });

  it('does NOT fire when both canonical and legacy are present (canonical wins)', async () => {
    await write(
      root,
      'agent-context.md',
      '---\npriority_layers_refs:\n  - identity\npriority_layers:\n  - identity\n---\n# ctx\n',
    );
    const collector = new IssueCollector();
    await validateLegacyRefFieldMigration(root, collector);
    expect(collector.infos).toEqual([]);
  });
});
