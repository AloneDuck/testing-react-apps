import { describe, expect, it } from 'vitest';
import { filterFiltersCompactBreakdown } from '../src/features/filters-filter-compact-breakdown';
describe('compact breakdown', () => {
  it('handles duplicate values', () => { expect(filterFiltersCompactBreakdown([2, 4, 6, 8])).toBe(4); });
});
