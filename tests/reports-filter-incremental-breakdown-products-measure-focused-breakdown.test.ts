import { describe, expect, it } from 'vitest';
import { measureProductsFocusedBreakdown } from '../src/features/products-measure-focused-breakdown';
describe('focused breakdown', () => {
  it('handles large values', () => { expect(measureProductsFocusedBreakdown([2, 4, 6, 8])).toBe(60); });
});
