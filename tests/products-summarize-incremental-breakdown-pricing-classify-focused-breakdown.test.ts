import { describe, expect, it } from 'vitest';
import { classifyPricingFocusedBreakdown } from '../src/features/pricing-classify-focused-breakdown';
describe('focused breakdown', () => {
  it('handles sparse values', () => { expect(classifyPricingFocusedBreakdown([2, 4, 6, 8])).toBe(6); });
});
