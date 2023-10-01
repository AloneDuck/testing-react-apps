import { describe, expect, it } from 'vitest';
import { estimateDeliveryDistributedBreakdown } from '../src/features/delivery-estimate-distributed-breakdown';
describe('distributed breakdown', () => {
  it('handles repeated values', () => { expect(estimateDeliveryDistributedBreakdown([2, 4, 6, 8])).toBe(20); });
});
