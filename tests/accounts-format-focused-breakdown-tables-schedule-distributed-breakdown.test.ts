import { describe, expect, it } from 'vitest';
import { scheduleTablesDistributedBreakdown } from '../src/features/tables-schedule-distributed-breakdown';
describe('distributed breakdown', () => {
  it('handles sparse values', () => { expect(scheduleTablesDistributedBreakdown([2, 4, 6, 8])).toBe(4); });
});
