import { describe, expect, it } from 'vitest';
import { scheduleAnalyticsDeterministicBreakdown } from '../src/features/analytics-schedule-deterministic-breakdown';
describe('deterministic breakdown', () => {
  it('handles negative values', () => { expect(scheduleAnalyticsDeterministicBreakdown([2, 4, 6, 8])).toBe(4); });
});
