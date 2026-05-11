/**
 * Per-validator-run body-parse cache. Because multiple rules scan the
 * same files, parsing each file once per `validateBrand()` call is a
 * meaningful win. The cache is keyed by absolute path; callers acquire a
 * `BodyCache` at the top of a validator run and discard it at the end.
 */
import type { ParsedBody } from './types.js';
export declare class BodyCache {
    private store;
    get(filePath: string): Promise<ParsedBody>;
    /** Clear the cache. Test/debug aid; not used in normal flow. */
    clear(): void;
    size(): number;
}
//# sourceMappingURL=cache.d.ts.map