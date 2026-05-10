/**
 * Loads `brand.yaml` from a brand-spec checkout and parses it into the
 * typed BrandSpec model. Throws if the file is missing or doesn't match
 * the expected shape.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { BrandSpecSchema, type BrandSpec } from './types.js';

export interface LoadSpecOptions {
  /** Path to a brand-spec repo checkout. The file `brand.yaml` is read from inside. */
  specPath: string;
}

export async function loadBrandSpec(options: LoadSpecOptions): Promise<BrandSpec> {
  const yamlPath = path.join(options.specPath, 'brand.yaml');
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
