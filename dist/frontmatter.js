/**
 * Frontmatter parsing utility — reads a markdown file and returns its
 * YAML frontmatter as a parsed object, plus the body. Returns null
 * frontmatter when the file has no `---`-delimited block. Throws
 * `FrontmatterError` when the block exists but is malformed YAML.
 */
import { promises as fs } from 'node:fs';
import YAML from 'yaml';
export class FrontmatterError extends Error {
    path;
    constructor(message, path) {
        super(message);
        this.path = path;
        this.name = 'FrontmatterError';
    }
}
const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;
export function parseFrontmatter(raw, filePath) {
    const match = raw.match(FRONTMATTER_RE);
    if (!match) {
        return { data: null, body: raw, hasFrontmatter: false };
    }
    const [, yamlBlock, body] = match;
    // Empty frontmatter block (`---\n---`) is valid and parses to null.
    if (yamlBlock === undefined) {
        return { data: null, body: body ?? '', hasFrontmatter: true };
    }
    let parsed;
    try {
        parsed = YAML.parse(yamlBlock);
    }
    catch (err) {
        throw new FrontmatterError(`frontmatter is not valid YAML: ${err.message}`, filePath);
    }
    if (parsed === null || parsed === undefined) {
        return { data: null, body: body ?? '', hasFrontmatter: true };
    }
    if (typeof parsed !== 'object' || Array.isArray(parsed)) {
        throw new FrontmatterError(`frontmatter must be a YAML mapping (object), got ${Array.isArray(parsed) ? 'array' : typeof parsed}`, filePath);
    }
    return {
        data: parsed,
        body: body ?? '',
        hasFrontmatter: true,
    };
}
export async function readFrontmatter(filePath) {
    const raw = await fs.readFile(filePath, 'utf-8');
    return parseFrontmatter(raw, filePath);
}
//# sourceMappingURL=frontmatter.js.map