/**
 * Sanity check on the vendored brand-spec that ships with this package.
 * Catches drift if someone manually edits vendor/brand-spec/brand.yaml
 * and breaks parsing or schema shape.
 */

import { describe, it, expect } from 'vitest';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { loadBrandSpec, vendoredSpecPath } from '../../src/index.js';

describe('vendored brand-spec', () => {
  it('vendored brand.yaml file exists on disk', async () => {
    const p = path.join(vendoredSpecPath(), 'brand.yaml');
    const stat = await fs.stat(p);
    expect(stat.isFile()).toBe(true);
    expect(stat.size).toBeGreaterThan(100);
  });

  it('vendored brand.yaml parses and matches the BrandSpec schema', async () => {
    const spec = await loadBrandSpec();
    expect(spec.contract_version).toBeTruthy();
    expect(typeof spec.contract_version).toBe('string');
    expect(Object.keys(spec.layers).length).toBeGreaterThan(0);
  });
});
