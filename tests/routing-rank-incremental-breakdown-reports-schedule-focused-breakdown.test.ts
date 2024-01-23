import { describe, expect, it } from 'vitest';
import { scheduleReportsFocusedBreakdown } from '../src/features/reports-schedule-focused-breakdown';
describe('focused breakdown', () => {
  it('handles repeated values', () => { expect(scheduleReportsFocusedBreakdown([2, 4, 6, 8])).toBe(4); });
});
