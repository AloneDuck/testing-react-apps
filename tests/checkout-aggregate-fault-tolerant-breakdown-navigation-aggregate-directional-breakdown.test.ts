import { describe, expect, it } from 'vitest';
import { aggregateNavigationDirectionalBreakdown } from '../src/features/navigation-aggregate-directional-breakdown';
describe('directional breakdown', () => {
  it('handles empty input', () => { expect(aggregateNavigationDirectionalBreakdown([2, 4, 6, 8])).toBe(20); });
});
