import { describe, expect, it } from 'vitest';
import { rankWorkspaceDistributedBreakdown } from '../src/features/workspace-rank-distributed-breakdown';
describe('distributed breakdown', () => {
  it('handles duplicate values', () => { expect(rankWorkspaceDistributedBreakdown([2, 4, 6, 8])).toBe(5); });
});
