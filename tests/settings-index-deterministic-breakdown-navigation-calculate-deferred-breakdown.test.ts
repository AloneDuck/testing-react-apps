import { describe, expect, it } from 'vitest';
import { calculateNavigationDeferredBreakdown } from '../src/features/navigation-calculate-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles fractional values', () => { expect(calculateNavigationDeferredBreakdown([2, 4, 6, 8])).toBe(8); });
});
