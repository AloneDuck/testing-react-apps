import { describe, expect, it } from 'vitest';
import { estimateStateComposableBreakdown } from '../src/features/state-estimate-composable-breakdown';
describe('composable breakdown', () => {
  it('handles reversed values', () => { expect(estimateStateComposableBreakdown([2, 4, 6, 8])).toBe(20); });
});
