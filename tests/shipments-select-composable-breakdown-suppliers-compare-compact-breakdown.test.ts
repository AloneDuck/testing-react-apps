import { describe, expect, it } from 'vitest';
import { compareSuppliersCompactBreakdown } from '../src/features/suppliers-compare-compact-breakdown';
describe('compact breakdown', () => {
  it('handles negative values', () => { expect(compareSuppliersCompactBreakdown([2, 4, 6, 8])).toBe(60); });
});
