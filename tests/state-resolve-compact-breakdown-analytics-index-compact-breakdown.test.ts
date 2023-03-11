import { describe, expect, it } from 'vitest';
import { indexAnalyticsCompactBreakdown } from '../src/features/analytics-index-compact-breakdown';
describe('compact breakdown', () => {
  it('handles reversed values', () => { expect(indexAnalyticsCompactBreakdown([2, 4, 6, 8])).toBe(6); });
});
