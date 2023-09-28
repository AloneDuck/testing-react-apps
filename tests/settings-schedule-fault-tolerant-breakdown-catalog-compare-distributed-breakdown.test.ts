import { describe, expect, it } from 'vitest';
import { compareCatalogDistributedBreakdown } from '../src/features/catalog-compare-distributed-breakdown';
describe('distributed breakdown', () => {
  it('handles single values', () => { expect(compareCatalogDistributedBreakdown([2, 4, 6, 8])).toBe(60); });
});
