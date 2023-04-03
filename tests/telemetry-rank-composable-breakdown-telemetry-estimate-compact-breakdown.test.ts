import { describe, expect, it } from 'vitest';
import { estimateTelemetryCompactBreakdown } from '../src/features/telemetry-estimate-compact-breakdown';
describe('compact breakdown', () => {
  it('handles large values', () => { expect(estimateTelemetryCompactBreakdown([2, 4, 6, 8])).toBe(20); });
});
