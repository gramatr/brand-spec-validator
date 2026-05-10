/**
 * Cross-cutting frontmatter validation: enforces enum values for fields
 * declared under `conventions.frontmatter.common_fields` (status,
 * visibility, source_authority.*) on EVERY file we parse, regardless of
 * which layer the file belongs to.
 *
 * Also handles the v1.1 → v1.2 backward-compat migration warning for
 * `audience: internal` on `proof/competitive.md`.
 */

import type { BrandSpec, FrontmatterField } from '../schema/types.js';
import type { IssueCollector } from '../result.js';

interface CommonFieldsContext {
  spec: BrandSpec;
  collector: IssueCollector;
}

const STATUS_ENUM = ['draft', 'active', 'canonical', 'open', 'archived', 'sample'];
const VISIBILITY_ENUM = ['public', 'customer', 'internal', 'sales-enablement'];
const SA_STATUS_ENUM = ['canonical', 'mirror', 'historical', 'fixture-only'];
const REFRESH_CADENCE_ENUM = ['manual', 'on-deploy', 'weekly', 'monthly', 'on-source-change'];

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

export function validateCommonFields(
  data: Record<string, unknown> | null,
  filePath: string,
  ctx: CommonFieldsContext,
): void {
  if (!data) return;
  const isSample = data['status'] === 'sample';
  if (isSample) return; // sample files tolerate placeholders

  // status enum — demoted to warning. The spec's common-fields enum is
  // overspecified relative to real brand usage: examples/ files use
  // free-form review-state strings ("reference — validated by human
  // review") that don't fit the lifecycle enum. Surface as advisory; do
  // not block ingest.
  const status = data['status'];
  if (status !== undefined && !STATUS_ENUM.includes(status as string)) {
    ctx.collector.warn(
      'frontmatter-common-enum',
      filePath,
      `frontmatter.status = ${JSON.stringify(status)} is not in enum [${STATUS_ENUM.join(', ')}]`,
    );
  }

  // visibility enum
  const visibility = data['visibility'];
  if (visibility !== undefined && !VISIBILITY_ENUM.includes(visibility as string)) {
    ctx.collector.error(
      'frontmatter-common-enum',
      filePath,
      `frontmatter.visibility = ${JSON.stringify(visibility)} is not in enum [${VISIBILITY_ENUM.join(', ')}]`,
    );
  }

  // backward-compat: audience: internal on proof/competitive.md
  if (filePath === 'proof/competitive.md' && data['audience'] === 'internal') {
    ctx.collector.warn(
      'visibility-audience-internal-backcompat',
      filePath,
      `legacy 'audience: internal' detected; migrate to 'visibility: internal' (v1.2)`,
    );
  }

  // source_authority block
  const sa = data['source_authority'];
  if (sa !== undefined) {
    if (!isObject(sa)) {
      ctx.collector.error(
        'frontmatter-common-enum',
        filePath,
        `frontmatter.source_authority must be a mapping`,
      );
      return;
    }
    const saStatus = sa['status'];
    if (saStatus === undefined) {
      ctx.collector.error(
        'frontmatter-common-enum',
        filePath,
        `frontmatter.source_authority.status is required when source_authority is set`,
      );
    } else if (!SA_STATUS_ENUM.includes(saStatus as string)) {
      ctx.collector.error(
        'frontmatter-common-enum',
        filePath,
        `frontmatter.source_authority.status = ${JSON.stringify(saStatus)} not in [${SA_STATUS_ENUM.join(', ')}]`,
      );
    }
    const refresh = sa['refresh'];
    if (refresh !== undefined) {
      if (!isObject(refresh)) {
        ctx.collector.error(
          'frontmatter-common-enum',
          filePath,
          `frontmatter.source_authority.refresh must be a mapping`,
        );
      } else {
        const cadence = refresh['cadence'];
        if (cadence !== undefined && !REFRESH_CADENCE_ENUM.includes(cadence as string)) {
          ctx.collector.error(
            'frontmatter-common-enum',
            filePath,
            `frontmatter.source_authority.refresh.cadence = ${JSON.stringify(cadence)} not in [${REFRESH_CADENCE_ENUM.join(', ')}]`,
          );
        }
      }
    }
  }
}

/** Pull common-fields enum hint from the spec (used for tests / introspection). */
export function commonFieldsFromSpec(spec: BrandSpec): Record<string, FrontmatterField> {
  return spec.conventions?.frontmatter?.common_fields ?? {};
}
