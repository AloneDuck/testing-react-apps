import { describe, expect, it } from 'vitest';
import { deriveAccessibilityComposableBreakdown } from '../src/features/accessibility-derive-composable-breakdown';
describe('composable breakdown', () => {
  it('handles sparse values', () => { expect(deriveAccessibilityComposableBreakdown([2, 4, 6, 8])).toBe(4); });
});
