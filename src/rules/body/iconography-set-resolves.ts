/**
 * Rule: iconography-set-resolves (brand-spec v1.6.1, severity: info)
 *
 * Hybrid frontmatter+filesystem rule. When `design/iconography.md`
 * declares `icon_set.name: custom` (or any value indicating a
 * brand-provided set), `design/icons/` SHOULD exist with at least one
 * icon source file and a `_manifest.md`. When `icon_set.name`
 * references a well-known public library (lucide, material-symbols,
 * heroicons, fontawesome, phosphor, tabler), no local files are
 * required — informational only.
 *
 * The body-parse subsystem isn't strictly required for the frontmatter
 * read, but the rule lives in `body/` because the iconography body
 * informs which check applies (e.g., a brand may indicate custom in
 * body prose when frontmatter is absent — covered by a fallback scan).
 */

import path from 'node:path';
import { isDir, isFile, listFiles } from '../../fs-utils.js';
import { readFrontmatter } from '../../frontmatter.js';
import type { BodyCache } from '../../body-parse/index.js';
import type { IssueCollector } from '../../result.js';

const PUBLIC_LIBRARIES = new Set([
  'lucide',
  'material-symbols',
  'material-icons',
  'heroicons',
  'fontawesome',
  'font-awesome',
  'phosphor',
  'tabler',
  'feather',
  'remix',
  'remix-icon',
  'octicons',
  'bootstrap-icons',
]);

const ICON_EXTS = ['.svg', '.png', '.webp', '.ai', '.fig'];

function isCustomIndicator(value: string): boolean {
  const v = value.toLowerCase().trim();
  if (PUBLIC_LIBRARIES.has(v)) return false;
  // "custom", "brand-provided", "in-house", or anything else not on the
  // public list — treat as custom and require local artifacts.
  return true;
}

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

export async function validateIconographySetResolves(
  brandPath: string,
  cache: BodyCache,
  collector: IssueCollector,
): Promise<void> {
  const iconographyMd = path.join(brandPath, 'design', 'iconography.md');
  if (!(await isFile(iconographyMd))) return;
  let setName: string | undefined;
  try {
    const fm = await readFrontmatter(iconographyMd);
    const data = fm.data;
    const iconSet = data?.['icon_set'];
    if (typeof iconSet === 'string') setName = iconSet;
    else if (isObject(iconSet) && typeof iconSet['name'] === 'string') {
      setName = iconSet['name'] as string;
    }
  } catch {
    // FrontmatterError already reported elsewhere
    return;
  }

  // Body fallback: when frontmatter doesn't declare icon_set, scan the
  // body for an explicit "Icon set: <name>" line. Body-parse exposes
  // sections; we look across all of them.
  if (!setName) {
    const body = await cache.get(iconographyMd);
    const m = /^\s*(?:[-*]\s*)?icon[\s_-]?set\s*:\s*([A-Za-z0-9 _-]+)/im.exec(body.raw);
    if (m && m[1]) setName = m[1].trim();
  }

  if (!setName) return; // nothing to resolve

  if (!isCustomIndicator(setName)) {
    // Public library — no local files required. Surface as info trace
    // so adopters see the resolution decision.
    collector.info(
      'iconography-set-resolves',
      'design/iconography.md',
      `icon_set '${setName}' resolves to a known public library; local design/icons/ files are not required`,
    );
    return;
  }

  // Custom — require design/icons/ with at least one icon and _manifest.md.
  const iconsDir = path.join(brandPath, 'design', 'icons');
  if (!(await isDir(iconsDir))) {
    collector.info(
      'iconography-set-resolves',
      'design/icons/',
      `icon_set '${setName}' indicates a brand-provided set; design/icons/ directory is missing`,
    );
    return;
  }
  const files = await listFiles(iconsDir);
  const iconFiles = files.filter((f) => ICON_EXTS.some((ext) => f.toLowerCase().endsWith(ext)));
  if (iconFiles.length === 0) {
    collector.info(
      'iconography-set-resolves',
      'design/icons/',
      `icon_set '${setName}' indicates a brand-provided set; design/icons/ contains no icon source files (looked for ${ICON_EXTS.join(', ')})`,
    );
  }
  if (!files.includes('_manifest.md')) {
    collector.info(
      'iconography-set-resolves',
      'design/icons/',
      `icon_set '${setName}' indicates a brand-provided set; design/icons/_manifest.md describing the set is missing`,
    );
  }
}
