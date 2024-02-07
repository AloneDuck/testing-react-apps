import { describe, expect, it } from 'vitest';
import { aggregateFiltersIncrementalBreakdown } from '../src/features/filters-aggregate-incremental-breakdown';
describe('incremental breakdown', () => {
  it('handles repeated values', () => { expect(aggregateFiltersIncrementalBreakdown([2, 4, 6, 8])).toBe(5); });
});
