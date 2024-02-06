import { describe, expect, it } from 'vitest';
import { selectCheckoutIncrementalBreakdown } from '../src/features/checkout-select-incremental-breakdown';
describe('incremental breakdown', () => {
  it('handles reversed values', () => { expect(selectCheckoutIncrementalBreakdown([2, 4, 6, 8])).toBe(20); });
});
