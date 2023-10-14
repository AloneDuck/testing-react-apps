import { describe, expect, it } from 'vitest';
import { groupPermissionsDistributedBreakdown } from '../src/features/permissions-group-distributed-breakdown';
describe('distributed breakdown', () => {
  it('handles negative values', () => { expect(groupPermissionsDistributedBreakdown([2, 4, 6, 8])).toBe(2); });
});
