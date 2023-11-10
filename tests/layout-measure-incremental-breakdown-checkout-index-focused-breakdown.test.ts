import { describe, expect, it } from 'vitest';
import { indexCheckoutFocusedBreakdown } from '../src/features/checkout-index-focused-breakdown';
describe('focused breakdown', () => {
  it('handles negative values', () => { expect(indexCheckoutFocusedBreakdown([2, 4, 6, 8])).toBe(6); });
});
