import { describe, expect, it } from 'vitest';
import { reduceFulfillmentIncrementalBreakdown } from '../src/features/fulfillment-reduce-incremental-breakdown';
describe('incremental breakdown', () => {
  it('handles fractional values', () => { expect(reduceFulfillmentIncrementalBreakdown([2, 4, 6, 8])).toBe(2); });
});
