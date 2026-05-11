/**
 * Rule: data-viz-framework-presence (brand-spec v1.5, severity: info)
 *
 * When `data-viz/_framework.md` exists, its body SHOULD cover a small
 * set of expected topics so the layer's scope and consumption model are
 * documented. We check for headings that match an expected topic list;
 * missing topics surface as info-severity advisories.
 *
 * Implemented as a presence check; the info severity matches the v1.5
 * `data-viz-framework-recommended` companion rule.
 */
import path from 'node:path';
import { isFile } from '../../fs-utils.js';
const EXPECTED_TOPICS = [
    { label: 'scope', matchers: [/\bscope\b/i, /what this layer is/i] },
    {
        label: 'consumption model',
        matchers: [/consumption/i, /how this is used/i, /downstream/i],
    },
    {
        label: 'token-reference convention',
        matchers: [/token/i, /design.token/i, /references?/i],
    },
];
export async function validateDataVizFrameworkPresence(brandPath, cache, collector) {
    const fwPath = path.join(brandPath, 'data-viz', '_framework.md');
    if (!(await isFile(fwPath)))
        return; // companion rule already warns on absence
    const body = await cache.get(fwPath);
    const headings = body.sections.map((s) => s.heading);
    for (const topic of EXPECTED_TOPICS) {
        const covered = headings.some((h) => topic.matchers.some((re) => re.test(h)));
        if (!covered) {
            collector.info('data-viz-framework-presence', 'data-viz/_framework.md', `framework body should cover '${topic.label}' (no heading matched expected topic patterns)`);
        }
    }
}
//# sourceMappingURL=data-viz-framework-presence.js.map