import { describe, expect, it } from 'vitest';
import { summarizeOrdersComposableBreakdown } from '../src/features/orders-summarize-composable-breakdown';
describe('composable breakdown', () => {
  it('handles duplicate values', () => { expect(summarizeOrdersComposableBreakdown([2, 4, 6, 8])).toBe(4); });
});
