/**
 * Cross-layer rules around source_authority frontmatter:
 *   - source-authority-upstream-required (v1.2)
 *   - source-authority-notes-required (v1.2)
 *   - source-authority-mirror-freshness-warn (v1.2)
 */

import path from 'node:path';
import { exists } from '../fs-utils.js';
import type { IssueCollector } from '../result.js';
import { readAliased } from '../aliases.js';

interface SAContext {
  brandPath: string;
  collector: IssueCollector;
  freshness: boolean;
}

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function isUrl(s: string): boolean {
  try {
    const u = new URL(s);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

const CADENCE_DAYS: Record<string, number> = {
  weekly: 14,
  monthly: 60,
};

function daysBetween(iso: string, now: Date): number | null {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return null;
  return Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
}

export async function validateSourceAuthority(
  data: Record<string, unknown> | null,
  filePath: string,
  ctx: SAContext,
): Promise<void> {
  if (!data) return;
  if (data['status'] === 'sample') return;
  const sa = data['source_authority'];
  if (!isObject(sa)) return;
  const status = sa['status'];

  // upstream required for mirror | historical.
  // (v1.7) Accept both `upstream` (legacy) and `upstream_ref` (canonical).
  if (status === 'mirror' || status === 'historical') {
    const upstream = readAliased(sa, 'upstream_ref').value;
    if (typeof upstream !== 'string' || upstream.trim() === '') {
      ctx.collector.error(
        'source-authority-upstream-required',
        filePath,
        `source_authority.status = '${status}' requires source_authority.upstream`,
      );
    } else if (isUrl(upstream)) {
      // URL: just check it's well-formed (already did above)
    } else {
      // path: must exist relative to brand root
      const candidate = path.join(ctx.brandPath, upstream);
      if (!(await exists(candidate))) {
        ctx.collector.error(
          'source-authority-upstream-required',
          filePath,
          `source_authority.upstream path '${upstream}' does not exist in the brand repo`,
        );
      }
    }
  }

  // notes required for historical | fixture-only
  if (status === 'historical' || status === 'fixture-only') {
    const notes = sa['notes'];
    if (typeof notes !== 'string' || notes.trim() === '') {
      ctx.collector.error(
        'source-authority-notes-required',
        filePath,
        `source_authority.status = '${status}' requires non-empty source_authority.notes`,
      );
    }
  }

  // freshness warn for mirror with declared cadence
  if (ctx.freshness && status === 'mirror') {
    const refresh = sa['refresh'];
    if (isObject(refresh)) {
      const cadence = refresh['cadence'];
      const lastSynced = refresh['last_synced'];
      if (
        typeof cadence === 'string' &&
        typeof lastSynced === 'string' &&
        cadence in CADENCE_DAYS
      ) {
        const days = daysBetween(lastSynced, new Date());
        const threshold = CADENCE_DAYS[cadence];
        if (days !== null && threshold !== undefined && days > threshold) {
          ctx.collector.warn(
            'source-authority-mirror-freshness-warn',
            filePath,
            `mirror last_synced ${lastSynced} is ${days} days old; ${cadence} cadence implies stale after ${threshold} days`,
          );
        }
      }
    }
  }
}
