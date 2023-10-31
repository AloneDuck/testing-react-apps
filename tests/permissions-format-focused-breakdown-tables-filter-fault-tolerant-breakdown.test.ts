import { describe, expect, it } from 'vitest';
import { filterTablesFaultTolerantBreakdown } from '../src/features/tables-filter-fault-tolerant-breakdown';
describe('fault-tolerant breakdown', () => {
  it('handles duplicate values', () => { expect(filterTablesFaultTolerantBreakdown([2, 4, 6, 8])).toBe(20); });
});
