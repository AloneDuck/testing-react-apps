import { describe, expect, it } from 'vitest';
import { deriveWorkspaceDirectionalBreakdown } from '../src/features/workspace-derive-directional-breakdown';
describe('directional breakdown', () => {
  it('handles fractional values', () => { expect(deriveWorkspaceDirectionalBreakdown([2, 4, 6, 8])).toBe(6); });
});
