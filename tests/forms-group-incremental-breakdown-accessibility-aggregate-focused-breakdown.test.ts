import { describe, expect, it } from 'vitest';
import { aggregateAccessibilityFocusedBreakdown } from '../src/features/accessibility-aggregate-focused-breakdown';
describe('focused breakdown', () => {
  it('handles empty input', () => { expect(aggregateAccessibilityFocusedBreakdown([2, 4, 6, 8])).toBe(20); });
});
