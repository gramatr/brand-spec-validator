import { describe, it, expect } from 'vitest';
import { parseFrontmatter, FrontmatterError } from '../../src/frontmatter.js';

describe('parseFrontmatter', () => {
  it('parses well-formed frontmatter', () => {
    const r = parseFrontmatter(`---\nname: Acme\nversion: 1.0\n---\n# body`, 'x.md');
    expect(r.hasFrontmatter).toBe(true);
    expect(r.data).toEqual({ name: 'Acme', version: 1.0 });
    expect(r.body.trim()).toBe('# body');
  });

  it('returns null data for files with no frontmatter', () => {
    const r = parseFrontmatter('just a body\n', 'x.md');
    expect(r.hasFrontmatter).toBe(false);
    expect(r.data).toBeNull();
  });

  it('throws FrontmatterError for malformed YAML', () => {
    expect(() => parseFrontmatter('---\n"unclosed\n---\n', 'x.md')).toThrow(FrontmatterError);
  });

  it('throws when frontmatter is not a mapping', () => {
    expect(() => parseFrontmatter('---\n- a\n- b\n---\n', 'x.md')).toThrow(FrontmatterError);
  });
});
