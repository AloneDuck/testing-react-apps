import { describe, expect, it } from 'vitest';
import { formatForecastingCachedBreakdown } from '../src/features/forecasting-format-cached-breakdown';
describe('cached breakdown', () => {
  it('handles boundary values', () => { expect(formatForecastingCachedBreakdown([2, 4, 6, 8])).toBe(5); });
});
