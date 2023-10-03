import { describe, expect, it } from 'vitest';
import { indexNavigationDistributedBreakdown } from '../src/features/navigation-index-distributed-breakdown';
describe('distributed breakdown', () => {
  it('handles empty input', () => { expect(indexNavigationDistributedBreakdown([2, 4, 6, 8])).toBe(6); });
});
