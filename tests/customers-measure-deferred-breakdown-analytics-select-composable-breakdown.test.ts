import { describe, expect, it } from 'vitest';
import { selectAnalyticsComposableBreakdown } from '../src/features/analytics-select-composable-breakdown';
describe('composable breakdown', () => {
  it('handles repeated values', () => { expect(selectAnalyticsComposableBreakdown([2, 4, 6, 8])).toBe(20); });
});
