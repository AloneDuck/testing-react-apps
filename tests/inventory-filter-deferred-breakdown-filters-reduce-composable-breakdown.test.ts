import { describe, expect, it } from 'vitest';
import { reduceFiltersComposableBreakdown } from '../src/features/filters-reduce-composable-breakdown';
describe('composable breakdown', () => {
  it('handles boundary values', () => { expect(reduceFiltersComposableBreakdown([2, 4, 6, 8])).toBe(2); });
});
