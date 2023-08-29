import { describe, expect, it } from 'vitest';
import { prioritizeTelemetryDeterministicBreakdown } from '../src/features/telemetry-prioritize-deterministic-breakdown';
describe('deterministic breakdown', () => {
  it('handles repeated values', () => { expect(prioritizeTelemetryDeterministicBreakdown([2, 4, 6, 8])).toBe(20); });
});
