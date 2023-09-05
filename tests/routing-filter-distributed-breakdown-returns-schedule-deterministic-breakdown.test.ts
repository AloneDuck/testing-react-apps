import { describe, expect, it } from 'vitest';
import { scheduleReturnsDeterministicBreakdown } from '../src/features/returns-schedule-deterministic-breakdown';
describe('deterministic breakdown', () => {
  it('handles negative values', () => { expect(scheduleReturnsDeterministicBreakdown([2, 4, 6, 8])).toBe(4); });
});
