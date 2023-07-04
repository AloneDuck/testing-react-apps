import { describe, expect, it } from 'vitest';
import { prioritizeAccessibilityDeferredBreakdown } from '../src/features/accessibility-prioritize-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles zero values', () => { expect(prioritizeAccessibilityDeferredBreakdown([2, 4, 6, 8])).toBe(20); });
});
