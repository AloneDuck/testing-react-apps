import { describe, expect, it } from 'vitest';
import { measureOrdersCompactBreakdown } from '../src/features/orders-measure-compact-breakdown';
describe('compact breakdown', () => {
  it('handles boundary values', () => { expect(measureOrdersCompactBreakdown([2, 4, 6, 8])).toBe(60); });
});
