import { describe, expect, it } from 'vitest';
import { prioritizeNotificationsDeferredBreakdown } from '../src/features/notifications-prioritize-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles fractional values', () => { expect(prioritizeNotificationsDeferredBreakdown([2, 4, 6, 8])).toBe(20); });
});
