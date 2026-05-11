/**
 * Markdown body parser.
 *
 * Uses `unified` + `remark-parse` (+ `remark-gfm` for tables) to walk a
 * canonical markdown AST. We project the AST into the structured shapes
 * declared in `./types.ts` — sections (heading-bracketed regions),
 * fenced code blocks, GFM tables, and "inline values" (hex literals,
 * inline-code, links, bare URLs).
 *
 * The parser is intentionally side-effect-free; cache decisions live in
 * `./cache.ts`. A `parseBody(filePath)` call here always reads + parses
 * fresh.
 */
import type { ParsedBody } from './types.js';
export interface ParseBodyOptions {
    /** When provided, skip frontmatter parsing and treat input as pure body. */
    rawBody?: string;
}
export declare function parseBody(filePath: string, options?: ParseBodyOptions): Promise<ParsedBody>;
export declare function parseBodyString(body: string, filePath: string): ParsedBody;
//# sourceMappingURL=parse.d.ts.map