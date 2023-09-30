import { describe, expect, it } from 'vitest';
import { measureCheckoutDistributedBreakdown } from '../src/features/checkout-measure-distributed-breakdown';
describe('distributed breakdown', () => {
  it('handles sparse values', () => { expect(measureCheckoutDistributedBreakdown([2, 4, 6, 8])).toBe(4); });
});
