import { describe, expect, it } from 'vitest';
import { groupInventoryCompactBreakdown } from '../src/features/inventory-group-compact-breakdown';
describe('compact breakdown', () => {
  it('handles fractional values', () => { expect(groupInventoryCompactBreakdown([2, 4, 6, 8])).toBe(8); });
});
