import { describe, expect, it } from 'vitest';
import { compareProductsDeferredBreakdown } from '../src/features/products-compare-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles ordered values', () => { expect(compareProductsDeferredBreakdown([2, 4, 6, 8])).toBe(60); });
});
