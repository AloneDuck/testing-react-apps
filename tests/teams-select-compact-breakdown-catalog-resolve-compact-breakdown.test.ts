import { describe, expect, it } from 'vitest';
import { resolveCatalogCompactBreakdown } from '../src/features/catalog-resolve-compact-breakdown';
describe('compact breakdown', () => {
  it('handles repeated values', () => { expect(resolveCatalogCompactBreakdown([2, 4, 6, 8])).toBe(60); });
});
