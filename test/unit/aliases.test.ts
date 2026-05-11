/**
 * Unit tests for the field-name alias registry (src/aliases.ts) — the
 * v1.7 cross-layer-ref convention's backward-compat surface.
 */

import { describe, it, expect } from 'vitest';
import {
  FIELD_ALIASES,
  readAliased,
  findAliasByAnyName,
  isLegacyAlias,
  canonicalFor,
} from '../../src/aliases.js';

describe('FIELD_ALIASES registry', () => {
  it('declares the four known v1.7+ aliases', () => {
    const canonicals = FIELD_ALIASES.map((a) => a.canonical).sort();
    expect(canonicals).toEqual([
      'applies_to_refs',
      'priority_layers_refs',
      'target_persona_ref',
      'upstream_ref',
    ]);
  });

  it('every alias declares at least one legacy name', () => {
    for (const a of FIELD_ALIASES) {
      expect(a.legacy.length).toBeGreaterThan(0);
    }
  });
});

describe('readAliased', () => {
  it('returns canonical value when canonical name present', () => {
    const r = readAliased({ priority_layers_refs: ['identity', 'voice'] }, 'priority_layers_refs');
    expect(r.value).toEqual(['identity', 'voice']);
    expect(r.usedName).toBe('priority_layers_refs');
  });

  it('falls back to legacy name when canonical absent', () => {
    const r = readAliased({ priority_layers: ['identity'] }, 'priority_layers_refs');
    expect(r.value).toEqual(['identity']);
    expect(r.usedName).toBe('priority_layers');
  });

  it('prefers canonical when both canonical and legacy are present', () => {
    const r = readAliased(
      { priority_layers_refs: ['canonical'], priority_layers: ['legacy'] },
      'priority_layers_refs',
    );
    expect(r.value).toEqual(['canonical']);
    expect(r.usedName).toBe('priority_layers_refs');
  });

  it('returns undefined when neither name present', () => {
    const r = readAliased({ unrelated: 1 }, 'priority_layers_refs');
    expect(r.value).toBeUndefined();
    expect(r.usedName).toBeUndefined();
  });

  it('reads non-aliased fields directly', () => {
    const r = readAliased({ register: 'blog' }, 'register');
    expect(r.value).toBe('blog');
    expect(r.usedName).toBe('register');
  });

  it('returns undefined for non-aliased absent field', () => {
    const r = readAliased({}, 'register');
    expect(r.value).toBeUndefined();
    expect(r.usedName).toBeUndefined();
  });
});

describe('findAliasByAnyName', () => {
  it('matches canonical', () => {
    const a = findAliasByAnyName('applies_to_refs');
    expect(a?.canonical).toBe('applies_to_refs');
  });

  it('matches legacy', () => {
    const a = findAliasByAnyName('applies_to');
    expect(a?.canonical).toBe('applies_to_refs');
  });

  it('returns undefined for unknown', () => {
    expect(findAliasByAnyName('not_a_real_field')).toBeUndefined();
  });
});

describe('isLegacyAlias', () => {
  it('returns true for legacy names', () => {
    expect(isLegacyAlias('priority_layers')).toBe(true);
    expect(isLegacyAlias('applies_to')).toBe(true);
    expect(isLegacyAlias('upstream')).toBe(true);
  });

  it('returns false for canonical names', () => {
    expect(isLegacyAlias('priority_layers_refs')).toBe(false);
    expect(isLegacyAlias('applies_to_refs')).toBe(false);
    expect(isLegacyAlias('upstream_ref')).toBe(false);
  });

  it('returns false for unrelated names', () => {
    expect(isLegacyAlias('register')).toBe(false);
  });
});

describe('canonicalFor', () => {
  it('returns canonical for known legacy', () => {
    expect(canonicalFor('priority_layers')).toBe('priority_layers_refs');
    expect(canonicalFor('applies_to')).toBe('applies_to_refs');
    expect(canonicalFor('upstream')).toBe('upstream_ref');
  });

  it('returns undefined for unknown', () => {
    expect(canonicalFor('not_legacy')).toBeUndefined();
  });
});
