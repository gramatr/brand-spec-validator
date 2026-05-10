/**
 * Frontmatter parsing utility — reads a markdown file and returns its
 * YAML frontmatter as a parsed object, plus the body. Returns null
 * frontmatter when the file has no `---`-delimited block. Throws
 * `FrontmatterError` when the block exists but is malformed YAML.
 */
export declare class FrontmatterError extends Error {
    readonly path: string;
    constructor(message: string, path: string);
}
export interface ParsedFrontmatter {
    data: Record<string, unknown> | null;
    body: string;
    hasFrontmatter: boolean;
}
export declare function parseFrontmatter(raw: string, filePath: string): ParsedFrontmatter;
export declare function readFrontmatter(filePath: string): Promise<ParsedFrontmatter>;
//# sourceMappingURL=frontmatter.d.ts.map