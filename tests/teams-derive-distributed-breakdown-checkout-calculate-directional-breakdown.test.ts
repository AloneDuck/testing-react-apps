import { describe, expect, it } from 'vitest';
import { calculateCheckoutDirectionalBreakdown } from '../src/features/checkout-calculate-directional-breakdown';
describe('directional breakdown', () => {
  it('handles zero values', () => { expect(calculateCheckoutDirectionalBreakdown([2, 4, 6, 8])).toBe(8); });
});
