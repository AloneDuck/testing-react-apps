import { describe, expect, it } from 'vitest';
import { compareTeamsFocusedBreakdown } from '../src/features/teams-compare-focused-breakdown';
describe('focused breakdown', () => {
  it('handles zero values', () => { expect(compareTeamsFocusedBreakdown([2, 4, 6, 8])).toBe(60); });
});
