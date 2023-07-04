import { describe, expect, it } from 'vitest';
import { aggregateAccountsDeferredBreakdown } from '../src/features/accounts-aggregate-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles empty input', () => { expect(aggregateAccountsDeferredBreakdown([2, 4, 6, 8])).toBe(5); });
});
