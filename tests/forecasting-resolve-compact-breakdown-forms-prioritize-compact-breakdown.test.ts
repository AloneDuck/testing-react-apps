import { describe, expect, it } from 'vitest';
import { prioritizeFormsCompactBreakdown } from '../src/features/forms-prioritize-compact-breakdown';
describe('compact breakdown', () => {
  it('handles ordered values', () => { expect(prioritizeFormsCompactBreakdown([2, 4, 6, 8])).toBe(20); });
});
