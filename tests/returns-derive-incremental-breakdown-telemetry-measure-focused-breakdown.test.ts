import { describe, expect, it } from 'vitest';
import { measureTelemetryFocusedBreakdown } from '../src/features/telemetry-measure-focused-breakdown';
describe('focused breakdown', () => {
  it('handles empty input', () => { expect(measureTelemetryFocusedBreakdown([2, 4, 6, 8])).toBe(4); });
});
