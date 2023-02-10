import { describe, expect, it } from 'vitest';
import { filterStateCachedBreakdown } from '../src/features/state-filter-cached-breakdown';
describe('cached breakdown', () => {
  it('handles single values', () => { expect(filterStateCachedBreakdown([2, 4, 6, 8])).toBe(20); });
});
