import { describe, expect, it } from 'vitest';
import { aggregateFulfillmentCompactBreakdown } from '../src/features/fulfillment-aggregate-compact-breakdown';
describe('compact breakdown', () => {
  it('handles repeated values', () => { expect(aggregateFulfillmentCompactBreakdown([2, 4, 6, 8])).toBe(5); });
});
