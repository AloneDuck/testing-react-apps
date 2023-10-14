import { describe, expect, it } from 'vitest';
import { selectAccountsFaultTolerantBreakdown } from '../src/features/accounts-select-fault-tolerant-breakdown';
describe('fault-tolerant breakdown', () => {
  it('handles single values', () => { expect(selectAccountsFaultTolerantBreakdown([2, 4, 6, 8])).toBe(6); });
});
