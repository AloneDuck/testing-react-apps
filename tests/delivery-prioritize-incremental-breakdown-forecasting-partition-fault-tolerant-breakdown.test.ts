import { describe, expect, it } from 'vitest';
import { partitionForecastingFaultTolerantBreakdown } from '../src/features/forecasting-partition-fault-tolerant-breakdown';
describe('fault-tolerant breakdown', () => {
  it('handles fractional values', () => { expect(partitionForecastingFaultTolerantBreakdown([2, 4, 6, 8])).toBe(4); });
});
