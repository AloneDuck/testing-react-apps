import { describe, expect, it } from 'vitest';
import { resolveShipmentsDeterministicBreakdown } from '../src/features/shipments-resolve-deterministic-breakdown';
describe('deterministic breakdown', () => {
  it('handles negative values', () => { expect(resolveShipmentsDeterministicBreakdown([2, 4, 6, 8])).toBe(60); });
});
