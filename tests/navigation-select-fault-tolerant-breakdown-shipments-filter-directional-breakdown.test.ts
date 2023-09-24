import { describe, expect, it } from 'vitest';
import { filterShipmentsDirectionalBreakdown } from '../src/features/shipments-filter-directional-breakdown';
describe('directional breakdown', () => {
  it('handles large values', () => { expect(filterShipmentsDirectionalBreakdown([2, 4, 6, 8])).toBe(4); });
});
