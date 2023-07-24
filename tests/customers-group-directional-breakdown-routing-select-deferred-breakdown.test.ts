import { describe, expect, it } from 'vitest';
import { selectRoutingDeferredBreakdown } from '../src/features/routing-select-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles ordered values', () => { expect(selectRoutingDeferredBreakdown([2, 4, 6, 8])).toBe(6); });
});
