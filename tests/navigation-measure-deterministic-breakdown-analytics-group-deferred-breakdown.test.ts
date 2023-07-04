import { describe, expect, it } from 'vitest';
import { groupAnalyticsDeferredBreakdown } from '../src/features/analytics-group-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles boundary values', () => { expect(groupAnalyticsDeferredBreakdown([2, 4, 6, 8])).toBe(8); });
});
