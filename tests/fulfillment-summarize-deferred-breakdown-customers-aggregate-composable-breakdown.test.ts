import { describe, expect, it } from 'vitest';
import { aggregateCustomersComposableBreakdown } from '../src/features/customers-aggregate-composable-breakdown';
describe('composable breakdown', () => {
  it('handles duplicate values', () => { expect(aggregateCustomersComposableBreakdown([2, 4, 6, 8])).toBe(5); });
});
