import { describe, expect, it } from 'vitest';
import { rankSuppliersCachedBreakdown } from '../src/features/suppliers-rank-cached-breakdown';
describe('cached breakdown', () => {
  it('handles ordered values', () => { expect(rankSuppliersCachedBreakdown([2, 4, 6, 8])).toBe(5); });
});
