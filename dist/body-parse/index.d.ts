/**
 * Public surface of the body-parse subsystem.
 *
 * Body-parse provides structured access to markdown body content
 * (headings/sections, fenced code blocks, GFM tables, inline values
 * like hex literals and inline code) so validation rules can make
 * claims about file body content without re-parsing markdown.
 *
 * Frontmatter parsing is a separate concern (see `../frontmatter.ts`).
 * Body-parse runs on the post-frontmatter text only.
 */
export { parseBody, parseBodyString } from './parse.js';
export { BodyCache } from './cache.js';
export type { ParsedBody, Section, CodeBlock, InlineValue, InlineValueType, Table, TableCell, FindInlineValuesQuery, FindSectionQuery, } from './types.js';
//# sourceMappingURL=index.d.ts.map