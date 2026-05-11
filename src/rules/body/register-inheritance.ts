/**
 * Rule: register-inheritance-cannot-subtract (brand-spec v1.3, severity: error)
 *
 * Voice registers ADD permissions; they MUST NOT subtract brand-wide
 * constraints. Specifically: any term listed under the "Forbidden Terms"
 * section of `vocabulary.md` MUST NOT appear as an explicitly-allowed
 * term inside an "allowed" / "permitted" / "what this register allows"
 * section of any `voice/registers/*.md` file.
 *
 * Body-parse-aware: scans the register body for forbidden-term mentions
 * inside permissive sections; ignores quoted callouts and "what does
 * NOT fit" sections (those contexts are illustrative, not permissive).
 */

import path from 'node:path';
import { isDir, isFile, listFiles } from '../../fs-utils.js';
import type { BodyCache } from '../../body-parse/index.js';
import type { IssueCollector } from '../../result.js';

const ALLOWED_HEADING_PATTERNS = [
  /\ballowed?\b/i,
  /\bpermitted?\b/i,
  /what this register allows/i,
  /what this allows/i,
];

const NEGATIVE_HEADING_PATTERNS = [
  /does not fit/i,
  /still forbidden/i,
  /not allowed/i,
  /forbidden/i, // any forbidden-only sections are negative-space, skip
];

function looksLikeAllowedSection(headingPath: string[]): boolean {
  // Treat any section in the path matching an "allowed" pattern as permissive
  // unless a more-specific child section overrides with a negative pattern.
  let permissive = false;
  for (const h of headingPath) {
    if (NEGATIVE_HEADING_PATTERNS.some((re) => re.test(h))) return false;
    if (ALLOWED_HEADING_PATTERNS.some((re) => re.test(h))) permissive = true;
  }
  return permissive;
}

async function readForbiddenTerms(brandPath: string, cache: BodyCache): Promise<string[]> {
  const vocabPath = path.join(brandPath, 'vocabulary.md');
  if (!(await isFile(vocabPath))) return [];
  const body = await cache.get(vocabPath);
  // Find any section whose heading mentions "Forbidden".
  const sections = body.findSections({ heading: 'forbidden' });
  if (sections.length === 0) return [];
  const terms = new Set<string>();
  for (const sec of sections) {
    // Extract bullet items: "- term" or "* term" plus inline-code terms.
    const bulletRe = /^\s*[-*]\s+`?([A-Za-z][\w'-]*)`?/gm;
    let m: RegExpExecArray | null;
    while ((m = bulletRe.exec(sec.text)) !== null) {
      const t = m[1]?.toLowerCase().trim();
      if (t) terms.add(t);
    }
    // Also harvest inline-code from this section by scanning the section text.
    const inlineRe = /`([^`]+)`/g;
    while ((m = inlineRe.exec(sec.text)) !== null) {
      const candidate = m[1]?.toLowerCase().trim();
      if (candidate && /^[A-Za-z][\w' -]*$/.test(candidate)) terms.add(candidate);
    }
  }
  return [...terms];
}

export async function validateRegisterInheritance(
  brandPath: string,
  cache: BodyCache,
  collector: IssueCollector,
): Promise<void> {
  const registersDir = path.join(brandPath, 'voice', 'registers');
  if (!(await isDir(registersDir))) return;
  const forbidden = await readForbiddenTerms(brandPath, cache);
  if (forbidden.length === 0) return;

  const files = (await listFiles(registersDir)).filter(
    (f) => f.endsWith('.md') && !f.startsWith('_'),
  );
  for (const f of files) {
    const rel = `voice/registers/${f}`;
    const abs = path.join(registersDir, f);
    const body = await cache.get(abs);
    // Walk each section of the register file. For sections inside an
    // "allowed" heading path, scan the section text for whole-word
    // mentions of any forbidden term.
    for (const sec of body.sections) {
      if (!looksLikeAllowedSection(sec.headingPath)) continue;
      for (const term of forbidden) {
        const re = new RegExp(`\\b${escapeRegExp(term)}\\b`, 'i');
        if (re.test(sec.text)) {
          collector.error(
            'register-inheritance-cannot-subtract',
            rel,
            `forbidden term '${term}' appears under an allowed/permitted section ('${sec.heading}'); registers MUST NOT re-allow brand-wide forbidden terms`,
          );
        }
      }
    }
  }
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
