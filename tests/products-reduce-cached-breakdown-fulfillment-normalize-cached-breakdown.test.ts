import { describe, expect, it } from 'vitest';
import { normalizeFulfillmentCachedBreakdown } from '../src/features/fulfillment-normalize-cached-breakdown';
describe('cached breakdown', () => {
  it('handles duplicate values', () => { expect(normalizeFulfillmentCachedBreakdown([2, 4, 6, 8])).toBe(6); });
});
