/**
 * Unit tests for the body-parse subsystem (src/body-parse/).
 *
 * Targets the parser's structural projection: sections, code blocks,
 * tables, inline values, and the query helpers exposed on ParsedBody.
 */

import { describe, it, expect } from 'vitest';
import { parseBodyString } from '../../src/body-parse/index.js';

describe('body-parse: sections', () => {
  it('extracts headings and computes slugs', () => {
    const md = '# Title\n\nintro text\n\n## What this allows\n\nbody\n\n## Next section\n\n';
    const body = parseBodyString(md, 'test.md');
    expect(body.sections.length).toBe(3);
    const allows = body.findSection({ heading: 'What this allows' });
    expect(allows).toBeDefined();
    expect(allows?.depth).toBe(2);
    expect(allows?.slug).toBe('what-this-allows');
  });

  it('section text excludes the heading line', () => {
    const md = '## Allowed\n\nfoo bar\nmore body\n';
    const body = parseBodyString(md, 'test.md');
    const sec = body.findSection({ slug: 'allowed' });
    expect(sec?.text).toContain('foo bar');
    expect(sec?.text).not.toContain('## Allowed');
  });

  it('hasSection matches by slug', () => {
    const md = '## What This Register Allows\n\nbody\n';
    const body = parseBodyString(md, 'test.md');
    expect(body.hasSection('what-this-register-allows')).toBe(true);
    expect(body.hasSection('does-not-exist')).toBe(false);
  });
});

describe('body-parse: code blocks', () => {
  it('extracts fenced code blocks with language', () => {
    const md = '```ts\nconst x = 1;\n```\n';
    const body = parseBodyString(md, 'test.md');
    expect(body.codeBlocks.length).toBe(1);
    expect(body.codeBlocks[0]?.lang).toBe('ts');
    expect(body.codeBlocks[0]?.text).toBe('const x = 1;');
  });
});

describe('body-parse: tables', () => {
  it('extracts GFM tables with headers and rows', () => {
    const md =
      '| Role | Token |\n| --- | --- |\n| primary | --brand-primary |\n| secondary | --brand-secondary |\n';
    const body = parseBodyString(md, 'test.md');
    expect(body.tables.length).toBe(1);
    expect(body.tables[0]?.headers).toEqual(['Role', 'Token']);
    expect(body.tables[0]?.rows.length).toBe(2);
    expect(body.tables[0]?.rows[0]?.[1]?.text).toBe('--brand-primary');
  });
});

describe('body-parse: inline values', () => {
  it('finds hex literals in body text', () => {
    const md = 'Use #1abc9c for accents.\n';
    const body = parseBodyString(md, 'test.md');
    const hex = body.findInlineValues({ type: 'hex' });
    expect(hex.length).toBe(1);
    expect(hex[0]?.value).toBe('#1abc9c');
    expect(hex[0]?.inCodeBlock).toBe(false);
  });

  it('marks hex inside fenced code blocks as inCodeBlock', () => {
    const md = '```css\n.brand { color: #1abc9c; }\n```\n';
    const body = parseBodyString(md, 'test.md');
    const allHex = body.findInlineValues({ type: 'hex' });
    const exempted = body.findInlineValues({ type: 'hex', excludeCode: true });
    expect(allHex.length).toBe(1);
    expect(exempted.length).toBe(0);
  });

  it('excludes hex inside Quoted callout when excludeQuotedCallout set', () => {
    const md = '> Quoted: A. Person\n> The brand color is #1abc9c.\n\n';
    const body = parseBodyString(md, 'test.md');
    const all = body.findInlineValues({ type: 'hex' });
    const filtered = body.findInlineValues({ type: 'hex', excludeQuotedCallout: true });
    expect(all.length).toBe(1);
    expect(filtered.length).toBe(0);
  });

  it('extracts inline_code values', () => {
    const md = 'See `--brand-primary` token.\n';
    const body = parseBodyString(md, 'test.md');
    const codes = body.findInlineValues({ type: 'inline_code' });
    expect(codes.some((c) => c.value === '--brand-primary')).toBe(true);
  });

  it('annotates headingPath on inline values', () => {
    const md = '## Allowed\n\nUse #ffffff here.\n';
    const body = parseBodyString(md, 'test.md');
    const hex = body.findInlineValues({ type: 'hex' })[0];
    expect(hex?.headingPath).toEqual(['Allowed']);
  });
});
