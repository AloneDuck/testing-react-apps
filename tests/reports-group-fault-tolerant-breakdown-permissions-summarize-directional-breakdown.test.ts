import { describe, expect, it } from 'vitest';
import { summarizePermissionsDirectionalBreakdown } from '../src/features/permissions-summarize-directional-breakdown';
describe('directional breakdown', () => {
  it('handles empty input', () => { expect(summarizePermissionsDirectionalBreakdown([2, 4, 6, 8])).toBe(4); });
});
