import { describe, expect, it } from 'vitest';
import { resolveTablesFocusedBreakdown } from '../src/features/tables-resolve-focused-breakdown';
describe('focused breakdown', () => {
  it('handles large values', () => { expect(resolveTablesFocusedBreakdown([2, 4, 6, 8])).toBe(6); });
});
