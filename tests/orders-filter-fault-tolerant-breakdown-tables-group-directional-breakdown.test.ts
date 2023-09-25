import { describe, expect, it } from 'vitest';
import { groupTablesDirectionalBreakdown } from '../src/features/tables-group-directional-breakdown';
describe('directional breakdown', () => {
  it('handles repeated values', () => { expect(groupTablesDirectionalBreakdown([2, 4, 6, 8])).toBe(8); });
});
