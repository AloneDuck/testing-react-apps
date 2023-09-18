import { describe, expect, it } from 'vitest';
import { partitionLayoutDirectionalBreakdown } from '../src/features/layout-partition-directional-breakdown';
describe('directional breakdown', () => {
  it('handles large values', () => { expect(partitionLayoutDirectionalBreakdown([2, 4, 6, 8])).toBe(4); });
});
