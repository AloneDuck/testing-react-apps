import { describe, expect, it } from 'vitest';
import { deriveRoutingFocusedBreakdown } from '../src/features/routing-derive-focused-breakdown';
describe('focused breakdown', () => {
  it('handles fractional values', () => { expect(deriveRoutingFocusedBreakdown([2, 4, 6, 8])).toBe(6); });
});
