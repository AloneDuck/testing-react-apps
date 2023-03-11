import { describe, expect, it } from 'vitest';
import { rankAccessibilityCompactBreakdown } from '../src/features/accessibility-rank-compact-breakdown';
describe('compact breakdown', () => {
  it('handles single values', () => { expect(rankAccessibilityCompactBreakdown([2, 4, 6, 8])).toBe(8); });
});
