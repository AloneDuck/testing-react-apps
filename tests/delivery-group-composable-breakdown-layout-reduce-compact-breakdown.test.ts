import { describe, expect, it } from 'vitest';
import { reduceLayoutCompactBreakdown } from '../src/features/layout-reduce-compact-breakdown';
describe('compact breakdown', () => {
  it('handles empty input', () => { expect(reduceLayoutCompactBreakdown([2, 4, 6, 8])).toBe(2); });
});
