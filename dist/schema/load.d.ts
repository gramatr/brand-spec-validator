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
import { type BrandSpec } from './types.js';
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
export declare function vendoredSpecPath(): string;
export declare function loadBrandSpec(options?: LoadSpecOptions): Promise<BrandSpec>;
//# sourceMappingURL=load.d.ts.map