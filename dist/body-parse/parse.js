/**
 * Markdown body parser.
 *
 * Uses `unified` + `remark-parse` (+ `remark-gfm` for tables) to walk a
 * canonical markdown AST. We project the AST into the structured shapes
 * declared in `./types.ts` — sections (heading-bracketed regions),
 * fenced code blocks, GFM tables, and "inline values" (hex literals,
 * inline-code, links, bare URLs).
 *
 * The parser is intentionally side-effect-free; cache decisions live in
 * `./cache.ts`. A `parseBody(filePath)` call here always reads + parses
 * fresh.
 */
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { toString as nodeToString } from 'mdast-util-to-string';
import { readFrontmatter } from '../frontmatter.js';
const HEX_RE = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g;
const RGB_RE = /\brgba?\([^)]+\)/g;
const HSL_RE = /\bhsla?\([^)]+\)/g;
const URL_RE = /\bhttps?:\/\/[^\s)<>"']+/g;
function slugify(s) {
    return s
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
function lineOf(node) {
    return node.position?.start?.line ?? 1;
}
function endLineOf(node) {
    return node.position?.end?.line ?? lineOf(node);
}
function pushInlineValuesFromText(text, startLine, ctx, inCode, out) {
    const lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const lineText = lines[i] ?? '';
        const lineNo = startLine + i;
        pushMatches(HEX_RE, lineText, 'hex', lineNo, ctx, inCode, out);
        pushMatches(RGB_RE, lineText, 'rgb', lineNo, ctx, inCode, out);
        pushMatches(HSL_RE, lineText, 'hsl', lineNo, ctx, inCode, out);
        pushMatches(URL_RE, lineText, 'url', lineNo, ctx, inCode, out);
    }
}
function pushMatches(re, text, type, line, ctx, inCode, out) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
        out.push({
            type,
            value: m[0],
            line,
            inCodeBlock: inCode,
            inBlockquote: ctx.inBlockquote,
            blockquoteFirstLine: ctx.blockquoteFirstLine,
            headingPath: [...ctx.headingPath],
        });
    }
}
function walk(nodes, ctx, collectors) {
    for (const node of nodes) {
        switch (node.type) {
            case 'heading': {
                const text = nodeToString(node);
                collectors.headings.push({
                    node: node,
                    depth: node.depth,
                    text,
                    line: lineOf(node),
                });
                // Update heading path for subsequent nodes (modeled by re-walk below).
                // We don't recurse into headings themselves.
                break;
            }
            case 'code': {
                const code = node;
                collectors.codeBlocks.push({
                    lang: code.lang ? code.lang.toLowerCase() : undefined,
                    text: code.value,
                    startLine: lineOf(code),
                    endLine: endLineOf(code),
                    headingPath: [...ctx.headingPath],
                });
                // Hex/rgb/hsl can appear in code blocks; track them with inCode=true.
                pushInlineValuesFromText(code.value, lineOf(code) + 1, ctx, true, collectors.inlineValues);
                break;
            }
            case 'inlineCode': {
                const ic = node;
                collectors.inlineValues.push({
                    type: 'inline_code',
                    value: ic.value,
                    line: lineOf(ic),
                    inCodeBlock: true,
                    inBlockquote: ctx.inBlockquote,
                    blockquoteFirstLine: ctx.blockquoteFirstLine,
                    headingPath: [...ctx.headingPath],
                });
                // Also scan the inline code for hex/rgb/hsl with inCode=true.
                pushInlineValuesFromText(ic.value, lineOf(ic), ctx, true, collectors.inlineValues);
                break;
            }
            case 'link': {
                const lk = node;
                collectors.inlineValues.push({
                    type: 'link',
                    value: lk.url,
                    line: lineOf(lk),
                    inCodeBlock: false,
                    inBlockquote: ctx.inBlockquote,
                    blockquoteFirstLine: ctx.blockquoteFirstLine,
                    headingPath: [...ctx.headingPath],
                });
                if ('children' in lk)
                    walk(lk.children, ctx, collectors);
                break;
            }
            case 'text': {
                const t = node;
                pushInlineValuesFromText(t.value, lineOf(t), ctx, false, collectors.inlineValues);
                break;
            }
            case 'blockquote': {
                const bq = node;
                const firstChildText = nodeToString(bq).split('\n')[0] ?? '';
                const innerCtx = {
                    ...ctx,
                    inBlockquote: true,
                    blockquoteFirstLine: firstChildText,
                };
                walk(bq.children, innerCtx, collectors);
                break;
            }
            case 'table': {
                const tbl = node;
                const rowsRaw = tbl.children;
                const headerRow = rowsRaw[0];
                const headers = headerRow ? headerRow.children.map((c) => nodeToString(c).trim()) : [];
                const rows = rowsRaw
                    .slice(1)
                    .map((r) => r.children.map((c) => ({ text: nodeToString(c).trim() })));
                collectors.tables.push({
                    headers,
                    rows,
                    startLine: lineOf(tbl),
                    endLine: endLineOf(tbl),
                    headingPath: [...ctx.headingPath],
                });
                // Also harvest inline values from cell text.
                for (const row of rowsRaw) {
                    for (const cell of row.children) {
                        const cellText = nodeToString(cell);
                        pushInlineValuesFromText(cellText, lineOf(cell), ctx, false, collectors.inlineValues);
                    }
                }
                break;
            }
            default: {
                // Recurse into children if any.
                if ('children' in node && Array.isArray(node.children)) {
                    walk(node.children, ctx, collectors);
                }
                break;
            }
        }
    }
}
/**
 * Build the heading-bracketed Section list.
 *
 * Sections end at the next heading of equal-or-shallower depth, or at
 * end-of-file. The `text` field is the raw markdown body lines between
 * the heading line and the section end line.
 */
function buildSections(headings, body) {
    const lines = body.split('\n');
    const totalLines = lines.length;
    const sections = [];
    for (let i = 0; i < headings.length; i++) {
        const h = headings[i];
        let endLine = totalLines;
        for (let j = i + 1; j < headings.length; j++) {
            const next = headings[j];
            if (next.depth <= h.depth) {
                endLine = next.line - 1;
                break;
            }
        }
        // Build heading path from preceding headings.
        const headingPath = [];
        for (let k = 0; k < i; k++) {
            const prev = headings[k];
            // Pop entries with depth >= prev.depth from path before pushing.
            while (headingPath.length > 0 &&
                // Look up depth of last path entry by re-scanning headings.
                depthOf(headings.slice(0, k), headingPath[headingPath.length - 1]) >= prev.depth) {
                headingPath.pop();
            }
            if (prev.depth < h.depth) {
                // Only headings shallower than h belong on its path.
                headingPath.push(prev.text);
            }
        }
        headingPath.push(h.text);
        const sliceStart = h.line; // skip heading line itself
        const sliceEnd = endLine;
        const text = lines.slice(sliceStart, sliceEnd).join('\n');
        sections.push({
            depth: h.depth,
            heading: h.text,
            slug: slugify(h.text),
            startLine: h.line,
            endLine,
            text,
            headingPath,
        });
    }
    return sections;
}
function depthOf(headings, text) {
    for (let i = headings.length - 1; i >= 0; i--) {
        if (headings[i].text === text)
            return headings[i].depth;
    }
    return 0;
}
/**
 * Project the inline-value heading path correctly. The walk pass keeps
 * `headingPath` as [], because remark headings are siblings of paragraph
 * nodes (not parents). After walking, we annotate each inline value's
 * `headingPath` based on its line number versus heading line numbers.
 */
function annotateHeadingPaths(inlineValues, codeBlocks, tables, headings) {
    const headingPathAt = (line) => {
        const path = [];
        const depthStack = [];
        for (const h of headings) {
            if (h.line > line)
                break;
            while (depthStack.length > 0 && depthStack[depthStack.length - 1] >= h.depth) {
                depthStack.pop();
                path.pop();
            }
            depthStack.push(h.depth);
            path.push(h.text);
        }
        return path;
    };
    for (const v of inlineValues)
        v.headingPath = headingPathAt(v.line);
    for (const c of codeBlocks)
        c.headingPath = headingPathAt(c.startLine);
    for (const t of tables)
        t.headingPath = headingPathAt(t.startLine);
}
export async function parseBody(filePath, options = {}) {
    const body = options.rawBody !== undefined ? options.rawBody : (await readFrontmatter(filePath)).body;
    return parseBodyString(body, filePath);
}
export function parseBodyString(body, filePath) {
    const tree = unified().use(remarkParse).use(remarkGfm).parse(body);
    const collectors = {
        inlineValues: [],
        codeBlocks: [],
        tables: [],
        headings: [],
    };
    walk(tree.children, { headingPath: [], inBlockquote: false }, collectors);
    annotateHeadingPaths(collectors.inlineValues, collectors.codeBlocks, collectors.tables, collectors.headings);
    const sections = buildSections(collectors.headings, body);
    const findSections = (q) => {
        return sections.filter((s) => {
            if (q.depth !== undefined && s.depth !== q.depth)
                return false;
            if (q.slug !== undefined && s.slug !== q.slug)
                return false;
            if (q.heading !== undefined) {
                const needle = q.heading.toLowerCase();
                if (!s.heading.toLowerCase().includes(needle))
                    return false;
            }
            return true;
        });
    };
    const findInlineValues = (q = {}) => {
        const types = q.type ? (Array.isArray(q.type) ? new Set(q.type) : new Set([q.type])) : null;
        return collectors.inlineValues.filter((v) => {
            if (types && !types.has(v.type))
                return false;
            if (q.excludeCode && v.inCodeBlock)
                return false;
            if (q.excludeBlockquote && v.inBlockquote)
                return false;
            if (q.excludeQuotedCallout && v.inBlockquote) {
                const first = (v.blockquoteFirstLine ?? '').trim();
                if (/^quoted\s*:/i.test(first))
                    return false;
            }
            return true;
        });
    };
    return {
        filePath,
        raw: body,
        sections,
        codeBlocks: collectors.codeBlocks,
        inlineValues: collectors.inlineValues,
        tables: collectors.tables,
        findSection: (q) => findSections(q)[0],
        findSections,
        findInlineValues,
        hasSection: (slug) => sections.some((s) => s.slug === slug),
    };
}
//# sourceMappingURL=parse.js.map