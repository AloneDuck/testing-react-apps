import { describe, expect, it } from 'vitest';
import { classifyForecastingFocusedBreakdown } from '../src/features/forecasting-classify-focused-breakdown';
describe('focused breakdown', () => {
  it('handles single values', () => { expect(classifyForecastingFocusedBreakdown([2, 4, 6, 8])).toBe(2); });
});
