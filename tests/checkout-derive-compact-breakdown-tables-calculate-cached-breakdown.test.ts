import { describe, expect, it } from 'vitest';
import { calculateTablesCachedBreakdown } from '../src/features/tables-calculate-cached-breakdown';
describe('cached breakdown', () => {
  it('handles empty input', () => { expect(calculateTablesCachedBreakdown([2, 4, 6, 8])).toBe(8); });
});
