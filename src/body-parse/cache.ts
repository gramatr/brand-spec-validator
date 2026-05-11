/**
 * Per-validator-run body-parse cache. Because multiple rules scan the
 * same files, parsing each file once per `validateBrand()` call is a
 * meaningful win. The cache is keyed by absolute path; callers acquire a
 * `BodyCache` at the top of a validator run and discard it at the end.
 */

import type { ParsedBody } from './types.js';
import { parseBody } from './parse.js';

export class BodyCache {
  private store = new Map<string, Promise<ParsedBody>>();

  get(filePath: string): Promise<ParsedBody> {
    let p = this.store.get(filePath);
    if (!p) {
      p = parseBody(filePath);
      this.store.set(filePath, p);
    }
    return p;
  }

  /** Clear the cache. Test/debug aid; not used in normal flow. */
  clear(): void {
    this.store.clear();
  }

  size(): number {
    return this.store.size;
  }
}
