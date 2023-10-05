import { describe, expect, it } from 'vitest';
import { partitionTelemetryDistributedBreakdown } from '../src/features/telemetry-partition-distributed-breakdown';
describe('distributed breakdown', () => {
  it('handles large values', () => { expect(partitionTelemetryDistributedBreakdown([2, 4, 6, 8])).toBe(20); });
});
