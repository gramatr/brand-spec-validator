/**
 * Per-rule unit tests for the body-parse-aware rules introduced in
 * brand-spec-validator v0.2.0. Fixtures are constructed in tmpdir per
 * test to keep them small, hermetic, and free of any specific brand
 * identifiers (privacy scrub).
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { IssueCollector } from '../../src/result.js';
import { BodyCache } from '../../src/body-parse/index.js';
import {
  validateRegisterInheritance,
  validateDataVizNoHex,
  validateDataVizFrameworkPresence,
  validateIconographySetResolves,
} from '../../src/rules/body/index.js';

async function mktmp(): Promise<string> {
  return fs.mkdtemp(path.join(os.tmpdir(), 'bsv-body-'));
}

async function write(root: string, rel: string, content: string): Promise<void> {
  const abs = path.join(root, rel);
  await fs.mkdir(path.dirname(abs), { recursive: true });
  await fs.writeFile(abs, content, 'utf-8');
}

describe('register-inheritance-cannot-subtract', () => {
  let root: string;
  beforeEach(async () => {
    root = await mktmp();
  });

  it('passes when no register re-allows a forbidden term', async () => {
    await write(
      root,
      'vocabulary.md',
      '---\n---\n# Vocabulary\n\n## Forbidden Terms\n\n- revolutionary\n- synergy\n',
    );
    await write(
      root,
      'voice/registers/blog.md',
      '---\nregister: blog\n---\n# Blog register\n\n## What this allows\n\nLong-form prose, narrative voice.\n',
    );
    const collector = new IssueCollector();
    await validateRegisterInheritance(root, new BodyCache(), collector);
    expect(collector.errors).toEqual([]);
  });

  it('fails when register re-allows a brand-wide forbidden term under "What this allows"', async () => {
    await write(root, 'vocabulary.md', '---\n---\n## Forbidden Terms\n\n- revolutionary\n');
    await write(
      root,
      'voice/registers/social.md',
      '---\nregister: social\n---\n## What this register allows\n\nThe word revolutionary is allowed in this register.\n',
    );
    const collector = new IssueCollector();
    await validateRegisterInheritance(root, new BodyCache(), collector);
    expect(collector.errors.length).toBe(1);
    expect(collector.errors[0]?.ruleId).toBe('register-inheritance-cannot-subtract');
  });

  it('exempts forbidden term mentioned under a "What does NOT fit" section', async () => {
    await write(root, 'vocabulary.md', '---\n---\n## Forbidden Terms\n\n- revolutionary\n');
    await write(
      root,
      'voice/registers/blog.md',
      '---\nregister: blog\n---\n## What does NOT fit this register\n\nrevolutionary product launches.\n',
    );
    const collector = new IssueCollector();
    await validateRegisterInheritance(root, new BodyCache(), collector);
    expect(collector.errors).toEqual([]);
  });
});

describe('data-viz-no-hex-redeclaration', () => {
  let root: string;
  beforeEach(async () => {
    root = await mktmp();
  });

  it('passes when data-viz/colors.md uses only token references', async () => {
    await write(
      root,
      'data-viz/colors.md',
      '---\n---\n# Data-viz colors\n\n| Role | Token |\n| --- | --- |\n| primary | --brand-primary |\n',
    );
    const collector = new IssueCollector();
    await validateDataVizNoHex(root, new BodyCache(), collector);
    expect(collector.warnings).toEqual([]);
  });

  it('warns on a hex literal in body prose', async () => {
    await write(
      root,
      'data-viz/colors.md',
      '---\n---\n# Data-viz colors\n\nUse #1abc9c for the primary categorical role.\n',
    );
    const collector = new IssueCollector();
    await validateDataVizNoHex(root, new BodyCache(), collector);
    expect(collector.warnings.length).toBe(1);
    expect(collector.warnings[0]?.ruleId).toBe('data-viz-no-hex-redeclaration');
  });

  it('exempts hex inside fenced code blocks', async () => {
    await write(
      root,
      'data-viz/colors.md',
      '---\n---\n# Data-viz colors\n\n```css\n.bar { fill: #1abc9c; }\n```\n',
    );
    const collector = new IssueCollector();
    await validateDataVizNoHex(root, new BodyCache(), collector);
    expect(collector.warnings).toEqual([]);
  });
});

describe('data-viz-framework-presence', () => {
  let root: string;
  beforeEach(async () => {
    root = await mktmp();
  });

  it('passes when framework body covers expected topics', async () => {
    await write(
      root,
      'data-viz/_framework.md',
      '---\n---\n# Framework\n\n## Scope\n\n## Consumption model\n\n## Token references\n',
    );
    const collector = new IssueCollector();
    await validateDataVizFrameworkPresence(root, new BodyCache(), collector);
    expect(collector.infos).toEqual([]);
  });

  it('emits info advisories for missing topics', async () => {
    await write(root, 'data-viz/_framework.md', '---\n---\n# Framework\n\nbody only.\n');
    const collector = new IssueCollector();
    await validateDataVizFrameworkPresence(root, new BodyCache(), collector);
    expect(collector.infos.length).toBeGreaterThan(0);
    for (const i of collector.infos) {
      expect(i.ruleId).toBe('data-viz-framework-presence');
    }
  });

  it('is a no-op when _framework.md is absent (companion rule covers absence)', async () => {
    const collector = new IssueCollector();
    await validateDataVizFrameworkPresence(root, new BodyCache(), collector);
    expect(collector.infos).toEqual([]);
  });
});

describe('iconography-set-resolves', () => {
  let root: string;
  beforeEach(async () => {
    root = await mktmp();
  });

  it('passes silently when icon_set is a known public library', async () => {
    await write(
      root,
      'design/iconography.md',
      '---\nicon_set:\n  name: lucide\n---\n# Iconography\n',
    );
    const collector = new IssueCollector();
    await validateIconographySetResolves(root, new BodyCache(), collector);
    // Public-library resolution surfaces an info trace, not a warn/error.
    expect(collector.errors).toEqual([]);
    expect(collector.warnings).toEqual([]);
    expect(collector.infos.length).toBe(1);
    expect(collector.infos[0]?.ruleId).toBe('iconography-set-resolves');
  });

  it('flags missing local artifacts when icon_set is custom', async () => {
    await write(
      root,
      'design/iconography.md',
      '---\nicon_set:\n  name: custom\n---\n# Iconography\n',
    );
    const collector = new IssueCollector();
    await validateIconographySetResolves(root, new BodyCache(), collector);
    expect(collector.infos.length).toBeGreaterThanOrEqual(1);
    expect(collector.infos[0]?.ruleId).toBe('iconography-set-resolves');
  });

  it('passes when icon_set custom and design/icons/ has icons + manifest', async () => {
    await write(
      root,
      'design/iconography.md',
      '---\nicon_set:\n  name: custom\n---\n# Iconography\n',
    );
    await write(root, 'design/icons/_manifest.md', '# Manifest\n');
    await write(root, 'design/icons/check.svg', '<svg/>');
    const collector = new IssueCollector();
    await validateIconographySetResolves(root, new BodyCache(), collector);
    expect(collector.infos).toEqual([]);
    expect(collector.warnings).toEqual([]);
    expect(collector.errors).toEqual([]);
  });
});
