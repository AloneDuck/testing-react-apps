import { describe, expect, it } from 'vitest';
import { reduceRoutingFaultTolerantBreakdown } from '../src/features/routing-reduce-fault-tolerant-breakdown';
describe('fault-tolerant breakdown', () => {
  it('handles repeated values', () => { expect(reduceRoutingFaultTolerantBreakdown([2, 4, 6, 8])).toBe(2); });
});
