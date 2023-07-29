import { describe, expect, it } from 'vitest';
import { classifySuppliersDeferredBreakdown } from '../src/features/suppliers-classify-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles duplicate values', () => { expect(classifySuppliersDeferredBreakdown([2, 4, 6, 8])).toBe(2); });
});
