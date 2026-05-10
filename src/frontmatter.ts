/**
 * Frontmatter parsing utility — reads a markdown file and returns its
 * YAML frontmatter as a parsed object, plus the body. Returns null
 * frontmatter when the file has no `---`-delimited block. Throws
 * `FrontmatterError` when the block exists but is malformed YAML.
 */

import { promises as fs } from 'node:fs';
import YAML from 'yaml';

export class FrontmatterError extends Error {
  constructor(
    message: string,
    public readonly path: string,
  ) {
    super(message);
    this.name = 'FrontmatterError';
  }
}

export interface ParsedFrontmatter {
  data: Record<string, unknown> | null;
  body: string;
  hasFrontmatter: boolean;
}

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

export function parseFrontmatter(raw: string, filePath: string): ParsedFrontmatter {
  const match = raw.match(FRONTMATTER_RE);
  if (!match) {
    return { data: null, body: raw, hasFrontmatter: false };
  }
  const [, yamlBlock, body] = match;
  // Empty frontmatter block (`---\n---`) is valid and parses to null.
  if (yamlBlock === undefined) {
    return { data: null, body: body ?? '', hasFrontmatter: true };
  }
  let parsed: unknown;
  try {
    parsed = YAML.parse(yamlBlock);
  } catch (err) {
    throw new FrontmatterError(
      `frontmatter is not valid YAML: ${(err as Error).message}`,
      filePath,
    );
  }
  if (parsed === null || parsed === undefined) {
    return { data: null, body: body ?? '', hasFrontmatter: true };
  }
  if (typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new FrontmatterError(
      `frontmatter must be a YAML mapping (object), got ${Array.isArray(parsed) ? 'array' : typeof parsed}`,
      filePath,
    );
  }
  return {
    data: parsed as Record<string, unknown>,
    body: body ?? '',
    hasFrontmatter: true,
  };
}

export async function readFrontmatter(filePath: string): Promise<ParsedFrontmatter> {
  const raw = await fs.readFile(filePath, 'utf-8');
  return parseFrontmatter(raw, filePath);
}
