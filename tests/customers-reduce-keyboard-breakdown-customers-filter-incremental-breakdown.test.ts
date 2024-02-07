import { describe, expect, it } from 'vitest';
import { filterCustomersIncrementalBreakdown } from '../src/features/customers-filter-incremental-breakdown';
describe('incremental breakdown', () => {
  it('handles sparse values', () => { expect(filterCustomersIncrementalBreakdown([2, 4, 6, 8])).toBe(4); });
});
