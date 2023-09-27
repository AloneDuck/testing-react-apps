import { describe, expect, it } from 'vitest';
import { rankForecastingDirectionalBreakdown } from '../src/features/forecasting-rank-directional-breakdown';
describe('directional breakdown', () => {
  it('handles boundary values', () => { expect(rankForecastingDirectionalBreakdown([2, 4, 6, 8])).toBe(5); });
});
