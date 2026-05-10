/**
 * Loads `brand.yaml` from a brand-spec checkout and parses it into the
 * typed BrandSpec model. Throws if the file is missing or doesn't match
 * the expected shape.
 *
 * The validator ships a vendored copy of `brand.yaml` under
 * `vendor/brand-spec/brand.yaml`, pinned to the upstream brand-spec
 * version this validator release is built against. Callers may override
 * by passing `specPath` to point at an alternate brand-spec checkout
 * (used by power users / spec maintainers).
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';
import { BrandSpecSchema, type BrandSpec } from './types.js';

export interface LoadSpecOptions {
  /**
   * Optional path to a brand-spec repo checkout. The file `brand.yaml` is
   * read from inside. If omitted, the vendored copy that ships with this
   * package is used.
   */
  specPath?: string;
}

/**
 * Resolves the absolute path to the vendored `brand.yaml` that ships
 * with this package. Works whether the package is run from source (in
 * the repo, via tsx) or installed (under `node_modules`).
 *
 * Layout: this file lives at `<pkg>/src/schema/load.ts` in source and
 * `<pkg>/dist/schema/load.js` when built — both resolve `../../vendor`
 * to the package root's `vendor/` directory.
 */
export function vendoredSpecPath(): string {
  const here = path.dirname(fileURLToPath(import.meta.url));
  return path.resolve(here, '..', '..', 'vendor', 'brand-spec');
}

export async function loadBrandSpec(options: LoadSpecOptions = {}): Promise<BrandSpec> {
  const specDir = options.specPath ?? vendoredSpecPath();
  const yamlPath = path.join(specDir, 'brand.yaml');
  let raw: string;
  try {
    raw = await fs.readFile(yamlPath, 'utf-8');
  } catch (err) {
    throw new Error(`brand-spec not found at ${yamlPath}: ${(err as Error).message}`);
  }

  let parsed: unknown;
  try {
    parsed = YAML.parse(raw);
  } catch (err) {
    throw new Error(`brand.yaml at ${yamlPath} is not valid YAML: ${(err as Error).message}`);
  }

  const result = BrandSpecSchema.safeParse(parsed);
  if (!result.success) {
    throw new Error(
      `brand.yaml at ${yamlPath} does not match the expected brand-spec shape:\n${result.error.message}`,
    );
  }
  return result.data;
}
