/**
 * Type definitions for the body-parse subsystem.
 *
 * Body-parse runs ONLY on the post-frontmatter portion of a markdown
 * file. Frontmatter parsing lives in `frontmatter.ts` and is a separate
 * concern. Body-parse extracts structured artifacts (headings/sections,
 * code blocks, tables, inline values) so validation rules can make
 * claims about file body content without each rule re-parsing markdown.
 */

/** Inline value kinds the parser recognizes inside body text. */
export type InlineValueType =
  | 'hex' // #1abc9c, #abc — color literals
  | 'rgb' // rgb(...) / rgba(...)
  | 'hsl' // hsl(...) / hsla(...)
  | 'inline_code' // `--brand-primary`, `pie`, etc.
  | 'link' // [label](target)
  | 'url'; // bare http(s) URL

export interface InlineValue {
  type: InlineValueType;
  /** The raw matched text. */
  value: string;
  /** 1-based line number within the file (frontmatter included in count). */
  line: number;
  /** True when this value lives inside a fenced code block or inline code. */
  inCodeBlock: boolean;
  /** True when this value lives inside a markdown blockquote. */
  inBlockquote: boolean;
  /**
   * When inside a blockquote, the first line of the quote (raw, no `>`).
   * Used by rules that exempt `> Quoted: <attribution>` callouts.
   */
  blockquoteFirstLine?: string;
  /** Heading hierarchy at the value site, outermost first. */
  headingPath: string[];
}

export interface CodeBlock {
  /** Fence language (lowercased) or undefined for indented blocks. */
  lang: string | undefined;
  /** Raw block text (no fences). */
  text: string;
  /** 1-based start/end line numbers. */
  startLine: number;
  endLine: number;
  headingPath: string[];
}

export interface Section {
  /** Heading depth: 1..6. */
  depth: number;
  /** Heading plain text. */
  heading: string;
  /** Slug (lower-kebab) for matching. */
  slug: string;
  /** 1-based start/end line numbers (heading line .. line before next sibling/parent). */
  startLine: number;
  endLine: number;
  /** Raw markdown of the section body (excluding the heading line). */
  text: string;
  /** Heading path including this heading as the last element. */
  headingPath: string[];
}

export interface TableCell {
  text: string;
}

export interface Table {
  headers: string[];
  rows: TableCell[][];
  startLine: number;
  endLine: number;
  headingPath: string[];
}

export interface FindInlineValuesQuery {
  type?: InlineValueType | InlineValueType[];
  /** When true, exclude values inside fenced/inline code blocks. */
  excludeCode?: boolean;
  /** When true, exclude values inside any blockquote. */
  excludeBlockquote?: boolean;
  /** When true, exclude values inside `> Quoted:` callouts (case-insensitive). */
  excludeQuotedCallout?: boolean;
}

export interface FindSectionQuery {
  /** Match by heading text (case-insensitive substring) or exact slug. */
  heading?: string;
  slug?: string;
  /** Restrict to a specific depth (1..6). */
  depth?: number;
}

export interface ParsedBody {
  /** Absolute file path the body came from. */
  filePath: string;
  /** Raw body text (post-frontmatter). */
  raw: string;
  sections: Section[];
  codeBlocks: CodeBlock[];
  inlineValues: InlineValue[];
  tables: Table[];
  /** Find sections matching a query. */
  findSection(q: FindSectionQuery): Section | undefined;
  findSections(q: FindSectionQuery): Section[];
  /** Find inline values matching a query. */
  findInlineValues(q?: FindInlineValuesQuery): InlineValue[];
  /** Returns true when the body contains a heading with the given slug. */
  hasSection(slug: string): boolean;
}
