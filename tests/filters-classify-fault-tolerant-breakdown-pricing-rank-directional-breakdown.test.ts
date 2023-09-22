import { describe, expect, it } from 'vitest';
import { rankPricingDirectionalBreakdown } from '../src/features/pricing-rank-directional-breakdown';
describe('directional breakdown', () => {
  it('handles negative values', () => { expect(rankPricingDirectionalBreakdown([2, 4, 6, 8])).toBe(8); });
});
