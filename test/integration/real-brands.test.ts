/**
 * Integration tests against real brand repos. Skipped unless
 * BRAND_SPEC_TEST_BRANDS_DIR and BRAND_SPEC_TEST_BRANDS are both set.
 *
 * The brand directories under test are PRIVATE and MUST NOT be vendored
 * here. Configure via environment so this public package never ships
 * specific brand identifiers.
 *
 *   BRAND_SPEC_TEST_BRANDS_DIR  — directory containing brand subdirs
 *                                 (default: ../.. relative to this package)
 *   BRAND_SPEC_TEST_BRANDS      — comma-separated list of brand directory
 *                                 names to validate
 *
 * Example:
 *   BRAND_SPEC_TEST_BRANDS_DIR=/path/to/checkouts \
 *   BRAND_SPEC_TEST_BRANDS=brand-a,brand-b npm test
 *
 * The brand-spec itself is vendored with this package, so no sibling
 * brand-spec checkout is required.
 */

import { describe, it, expect } from 'vitest';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promises as fs } from 'node:fs';
import { validateBrand } from '../../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BRANDS_DIR =
  process.env['BRAND_SPEC_TEST_BRANDS_DIR'] ?? path.resolve(__dirname, '..', '..', '..');

const BRANDS_ENV = process.env['BRAND_SPEC_TEST_BRANDS'] ?? '';
const REAL_BRANDS = BRANDS_ENV
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

async function exists(p: string): Promise<boolean> {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

describe('real brand integration', () => {
  if (REAL_BRANDS.length === 0) {
    it.skip('no brands configured (set BRAND_SPEC_TEST_BRANDS=name1,name2,...)', () => undefined);
    return;
  }

  for (const brand of REAL_BRANDS) {
    it(`${brand}: validates with zero errors`, async () => {
      const brandPath = path.join(BRANDS_DIR, brand);
      if (!(await exists(brandPath))) {
        console.warn(`[skip] ${brandPath} not found; check BRAND_SPEC_TEST_BRANDS_DIR`);
        return;
      }
      const result = await validateBrand(brandPath);
      if (result.errors.length > 0) {
        // Surface the errors in the test output so CI tells us exactly
        // which rule fired.
        for (const e of result.errors) {
          console.error(`[${brand}] ${e.ruleId} ${e.path}: ${e.message}`);
        }
      }
      expect(result.errors).toEqual([]);
    });
  }
});
