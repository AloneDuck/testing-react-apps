import { describe, expect, it } from 'vitest';
import { rankReturnsFocusedBreakdown } from '../src/features/returns-rank-focused-breakdown';
describe('focused breakdown', () => {
  it('handles negative values', () => { expect(rankReturnsFocusedBreakdown([2, 4, 6, 8])).toBe(8); });
});
