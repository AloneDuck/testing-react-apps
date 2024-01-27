import { describe, expect, it } from 'vitest';
import { summarizeSessionsFocusedBreakdown } from '../src/features/sessions-summarize-focused-breakdown';
describe('focused breakdown', () => {
  it('handles single values', () => { expect(summarizeSessionsFocusedBreakdown([2, 4, 6, 8])).toBe(4); });
});
