import { describe, expect, it } from 'vitest';
import { aggregateTablesComposableBreakdown } from '../src/features/tables-aggregate-composable-breakdown';
describe('composable breakdown', () => {
  it('handles sparse values', () => { expect(aggregateTablesComposableBreakdown([2, 4, 6, 8])).toBe(20); });
});
