import { describe, expect, it } from 'vitest';
import { aggregateSettingsDeferredBreakdown } from '../src/features/settings-aggregate-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles sparse values', () => { expect(aggregateSettingsDeferredBreakdown([2, 4, 6, 8])).toBe(20); });
});
