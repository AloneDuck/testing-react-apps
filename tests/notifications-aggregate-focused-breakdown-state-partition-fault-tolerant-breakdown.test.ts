import { describe, expect, it } from 'vitest';
import { partitionStateFaultTolerantBreakdown } from '../src/features/state-partition-fault-tolerant-breakdown';
describe('fault-tolerant breakdown', () => {
  it('handles empty input', () => { expect(partitionStateFaultTolerantBreakdown([2, 4, 6, 8])).toBe(20); });
});
