/**
 * Rule: data-viz-no-hex-redeclaration (brand-spec v1.5, severity: warn)
 *
 * Files under `data-viz/` SHOULD NOT contain hex / rgb / hsl color
 * literals. Color values belong in `design-tokens.md` or `ui-tokens/`;
 * the data-viz layer assigns ROLES to existing tokens.
 *
 * Body-parse-aware exemptions:
 *   - hex literals inside fenced code blocks (illustrative, not authoritative)
 *   - hex literals inside `> Quoted:` blockquote callouts
 */

import path from 'node:path';
import { isDir, listFiles } from '../../fs-utils.js';
import type { BodyCache } from '../../body-parse/index.js';
import type { IssueCollector } from '../../result.js';

export async function validateDataVizNoHex(
  brandPath: string,
  cache: BodyCache,
  collector: IssueCollector,
): Promise<void> {
  const dir = path.join(brandPath, 'data-viz');
  if (!(await isDir(dir))) return;
  const files = (await listFiles(dir)).filter((f) => f.endsWith('.md'));
  for (const f of files) {
    const rel = `data-viz/${f}`;
    const body = await cache.get(path.join(dir, f));
    const literals = body.findInlineValues({
      type: ['hex', 'rgb', 'hsl'],
      excludeCode: true,
      excludeQuotedCallout: true,
    });
    // Group by value to keep noise down; report once per literal.
    const seen = new Set<string>();
    for (const lit of literals) {
      const key = `${lit.value}@${lit.line}`;
      if (seen.has(key)) continue;
      seen.add(key);
      collector.warn(
        'data-viz-no-hex-redeclaration',
        rel,
        `${lit.type} literal '${lit.value}' at line ${lit.line} should be a design-token reference (data-viz assigns roles to tokens; color values belong in design-tokens.md or ui-tokens/)`,
      );
    }
  }
}
