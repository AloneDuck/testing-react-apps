import { describe, expect, it } from 'vitest';
import { groupTeamsCachedBreakdown } from '../src/features/teams-group-cached-breakdown';
describe('cached breakdown', () => {
  it('handles duplicate values', () => { expect(groupTeamsCachedBreakdown([2, 4, 6, 8])).toBe(2); });
});
