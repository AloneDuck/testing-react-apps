import { describe, expect, it } from 'vitest';
import { scheduleDeliveryDeferredBreakdown } from '../src/features/delivery-schedule-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles single values', () => { expect(scheduleDeliveryDeferredBreakdown([2, 4, 6, 8])).toBe(4); });
});
