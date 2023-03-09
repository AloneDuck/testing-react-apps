import { describe, expect, it } from 'vitest';
import { aggregateReturnsCachedBreakdown } from '../src/features/returns-aggregate-cached-breakdown';
describe('cached breakdown', () => {
  it('handles duplicate values', () => { expect(aggregateReturnsCachedBreakdown([2, 4, 6, 8])).toBe(20); });
});
