import { describe, expect, it } from 'vitest';
import { resolveSearchComposableBreakdown } from '../src/features/search-resolve-composable-breakdown';
describe('composable breakdown', () => {
  it('handles reversed values', () => { expect(resolveSearchComposableBreakdown([2, 4, 6, 8])).toBe(6); });
});
