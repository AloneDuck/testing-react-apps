import { describe, expect, it } from 'vitest';
import { rankNotificationsCompactBreakdown } from '../src/features/notifications-rank-compact-breakdown';
describe('compact breakdown', () => {
  it('handles duplicate values', () => { expect(rankNotificationsCompactBreakdown([2, 4, 6, 8])).toBe(8); });
});
