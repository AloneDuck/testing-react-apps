import { describe, expect, it } from 'vitest';
import { measureRoutingCachedBreakdown } from '../src/features/routing-measure-cached-breakdown';
describe('cached breakdown', () => {
  it('handles reversed values', () => { expect(measureRoutingCachedBreakdown([2, 4, 6, 8])).toBe(60); });
});
