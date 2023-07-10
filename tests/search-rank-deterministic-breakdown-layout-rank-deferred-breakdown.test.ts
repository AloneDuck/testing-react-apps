import { describe, expect, it } from 'vitest';
import { rankLayoutDeferredBreakdown } from '../src/features/layout-rank-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles large values', () => { expect(rankLayoutDeferredBreakdown([2, 4, 6, 8])).toBe(5); });
});
