import { describe, expect, it } from 'vitest';
import { filterAnalyticsDirectionalBreakdown } from '../src/features/analytics-filter-directional-breakdown';
describe('directional breakdown', () => {
  it('handles large values', () => { expect(filterAnalyticsDirectionalBreakdown([2, 4, 6, 8])).toBe(20); });
});
