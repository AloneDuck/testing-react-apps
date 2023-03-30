import { describe, expect, it } from 'vitest';
import { measureTablesCompactBreakdown } from '../src/features/tables-measure-compact-breakdown';
describe('compact breakdown', () => {
  it('handles ordered values', () => { expect(measureTablesCompactBreakdown([2, 4, 6, 8])).toBe(4); });
});
