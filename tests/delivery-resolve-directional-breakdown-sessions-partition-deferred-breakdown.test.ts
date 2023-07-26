import { describe, expect, it } from 'vitest';
import { partitionSessionsDeferredBreakdown } from '../src/features/sessions-partition-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles reversed values', () => { expect(partitionSessionsDeferredBreakdown([2, 4, 6, 8])).toBe(4); });
});
