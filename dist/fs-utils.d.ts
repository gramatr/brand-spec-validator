/**
 * Small filesystem helpers used by rule modules.
 */
export declare function exists(p: string): Promise<boolean>;
export declare function isFile(p: string): Promise<boolean>;
export declare function isDir(p: string): Promise<boolean>;
export declare function listFiles(dir: string): Promise<string[]>;
export declare function listDirs(dir: string): Promise<string[]>;
/** Walk a directory recursively, returning relative file paths. */
export declare function walkFiles(root: string, sub?: string): Promise<string[]>;
/** Convert a literal-style glob like `*.svg` or `*.png|*.jpg` into a RegExp matcher. */
export declare function globToRegExp(glob: string): RegExp;
/** Convert a `for-{audience}.md` style pattern into a RegExp. Captures unnamed. */
export declare function patternToRegExp(pattern: string): RegExp;
//# sourceMappingURL=fs-utils.d.ts.map