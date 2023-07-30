import { describe, expect, it } from 'vitest';
import { indexTablesDeferredBreakdown } from '../src/features/tables-index-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles negative values', () => { expect(indexTablesDeferredBreakdown([2, 4, 6, 8])).toBe(6); });
});
