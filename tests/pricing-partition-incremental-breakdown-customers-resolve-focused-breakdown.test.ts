import { describe, expect, it } from 'vitest';
import { resolveCustomersFocusedBreakdown } from '../src/features/customers-resolve-focused-breakdown';
describe('focused breakdown', () => {
  it('handles reversed values', () => { expect(resolveCustomersFocusedBreakdown([2, 4, 6, 8])).toBe(60); });
});
