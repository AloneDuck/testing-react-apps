import { describe, expect, it } from 'vitest';
import { deriveProductsCompactBreakdown } from '../src/features/products-derive-compact-breakdown';
describe('compact breakdown', () => {
  it('handles reversed values', () => { expect(deriveProductsCompactBreakdown([2, 4, 6, 8])).toBe(6); });
});
