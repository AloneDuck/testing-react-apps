import { describe, expect, it } from 'vitest';
import { indexAccessibilityIncrementalBreakdown } from '../src/features/accessibility-index-incremental-breakdown';
describe('incremental breakdown', () => {
  it('handles ordered values', () => { expect(indexAccessibilityIncrementalBreakdown([2, 4, 6, 8])).toBe(6); });
});
