import { describe, expect, it } from 'vitest';
import { summarizeShipmentsCachedBreakdown } from '../src/features/shipments-summarize-cached-breakdown';
describe('cached breakdown', () => {
  it('handles negative values', () => { expect(summarizeShipmentsCachedBreakdown([2, 4, 6, 8])).toBe(4); });
});
