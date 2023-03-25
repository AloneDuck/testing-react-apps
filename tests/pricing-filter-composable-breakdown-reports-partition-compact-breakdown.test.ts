import { describe, expect, it } from 'vitest';
import { partitionReportsCompactBreakdown } from '../src/features/reports-partition-compact-breakdown';
describe('compact breakdown', () => {
  it('handles large values', () => { expect(partitionReportsCompactBreakdown([2, 4, 6, 8])).toBe(20); });
});
