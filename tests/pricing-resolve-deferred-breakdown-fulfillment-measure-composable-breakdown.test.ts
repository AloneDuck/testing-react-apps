import { describe, expect, it } from 'vitest';
import { measureFulfillmentComposableBreakdown } from '../src/features/fulfillment-measure-composable-breakdown';
describe('composable breakdown', () => {
  it('handles reversed values', () => { expect(measureFulfillmentComposableBreakdown([2, 4, 6, 8])).toBe(60); });
});
