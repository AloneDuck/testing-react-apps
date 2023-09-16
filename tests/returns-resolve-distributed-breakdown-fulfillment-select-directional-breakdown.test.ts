import { describe, expect, it } from 'vitest';
import { selectFulfillmentDirectionalBreakdown } from '../src/features/fulfillment-select-directional-breakdown';
describe('directional breakdown', () => {
  it('handles reversed values', () => { expect(selectFulfillmentDirectionalBreakdown([2, 4, 6, 8])).toBe(6); });
});
