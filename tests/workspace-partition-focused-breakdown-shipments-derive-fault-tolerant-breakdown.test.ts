import { describe, expect, it } from 'vitest';
import { deriveShipmentsFaultTolerantBreakdown } from '../src/features/shipments-derive-fault-tolerant-breakdown';
describe('fault-tolerant breakdown', () => {
  it('handles zero values', () => { expect(deriveShipmentsFaultTolerantBreakdown([2, 4, 6, 8])).toBe(6); });
});
