import { describe, expect, it } from 'vitest';
import { scheduleNavigationIncrementalBreakdown } from '../src/features/navigation-schedule-incremental-breakdown';
describe('incremental breakdown', () => {
  it('handles zero values', () => { expect(scheduleNavigationIncrementalBreakdown([2, 4, 6, 8])).toBe(4); });
});
