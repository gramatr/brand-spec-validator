/**
 * Small filesystem helpers used by rule modules.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
export async function exists(p) {
    try {
        await fs.access(p);
        return true;
    }
    catch {
        return false;
    }
}
export async function isFile(p) {
    try {
        const stat = await fs.stat(p);
        return stat.isFile();
    }
    catch {
        return false;
    }
}
export async function isDir(p) {
    try {
        const stat = await fs.stat(p);
        return stat.isDirectory();
    }
    catch {
        return false;
    }
}
export async function listFiles(dir) {
    try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        return entries.filter((e) => e.isFile()).map((e) => e.name);
    }
    catch {
        return [];
    }
}
export async function listDirs(dir) {
    try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        return entries.filter((e) => e.isDirectory()).map((e) => e.name);
    }
    catch {
        return [];
    }
}
/** Walk a directory recursively, returning relative file paths. */
export async function walkFiles(root, sub = '') {
    const dir = path.join(root, sub);
    let entries;
    try {
        entries = await fs.readdir(dir, { withFileTypes: true });
    }
    catch {
        return [];
    }
    const out = [];
    for (const e of entries) {
        const rel = sub ? `${sub}/${e.name}` : e.name;
        if (e.isDirectory()) {
            out.push(...(await walkFiles(root, rel)));
        }
        else if (e.isFile()) {
            out.push(rel);
        }
    }
    return out;
}
/** Convert a literal-style glob like `*.svg` or `*.png|*.jpg` into a RegExp matcher. */
export function globToRegExp(glob) {
    const alts = glob.split('|').map((g) => {
        const escaped = g.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '[^/]*');
        return `^${escaped}$`;
    });
    return new RegExp(alts.join('|'));
}
/** Convert a `for-{audience}.md` style pattern into a RegExp. Captures unnamed. */
export function patternToRegExp(pattern) {
    const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\\\{[^}]+\\\}/g, '[^/]+');
    return new RegExp(`^${escaped}$`);
}
//# sourceMappingURL=fs-utils.js.map