import { describe, expect, it } from 'vitest';
import { partitionFiltersDistributedBreakdown } from '../src/features/filters-partition-distributed-breakdown';
describe('distributed breakdown', () => {
  it('handles zero values', () => { expect(partitionFiltersDistributedBreakdown([2, 4, 6, 8])).toBe(4); });
});
