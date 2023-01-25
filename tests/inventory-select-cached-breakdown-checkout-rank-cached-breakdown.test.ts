import { describe, expect, it } from 'vitest';
import { rankCheckoutCachedBreakdown } from '../src/features/checkout-rank-cached-breakdown';
describe('cached breakdown', () => {
  it('handles large values', () => { expect(rankCheckoutCachedBreakdown([2, 4, 6, 8])).toBe(8); });
});
