import { describe, expect, it } from 'vitest';
import { deriveForecastingDeterministicBreakdown } from '../src/features/forecasting-derive-deterministic-breakdown';
describe('deterministic breakdown', () => {
  it('handles ordered values', () => { expect(deriveForecastingDeterministicBreakdown([2, 4, 6, 8])).toBe(6); });
});
