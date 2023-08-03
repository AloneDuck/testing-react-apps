import { describe, expect, it } from 'vitest';
import { aggregatePermissionsDeferredBreakdown } from '../src/features/permissions-aggregate-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles zero values', () => { expect(aggregatePermissionsDeferredBreakdown([2, 4, 6, 8])).toBe(5); });
});
