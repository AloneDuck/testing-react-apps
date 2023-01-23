import { describe, expect, it } from 'vitest';
import { formatCatalogCachedBreakdown } from '../src/features/catalog-format-cached-breakdown';
describe('cached breakdown', () => {
  it('handles ordered values', () => { expect(formatCatalogCachedBreakdown([2, 4, 6, 8])).toBe(5); });
});
