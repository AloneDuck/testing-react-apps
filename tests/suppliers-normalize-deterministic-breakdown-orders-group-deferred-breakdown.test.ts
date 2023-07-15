import { describe, expect, it } from 'vitest';
import { groupOrdersDeferredBreakdown } from '../src/features/orders-group-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles duplicate values', () => { expect(groupOrdersDeferredBreakdown([2, 4, 6, 8])).toBe(2); });
});
