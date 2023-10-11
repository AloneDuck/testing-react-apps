import { describe, expect, it } from 'vitest';
import { calculateNotificationsDistributedBreakdown } from '../src/features/notifications-calculate-distributed-breakdown';
describe('distributed breakdown', () => {
  it('handles boundary values', () => { expect(calculateNotificationsDistributedBreakdown([2, 4, 6, 8])).toBe(8); });
});
