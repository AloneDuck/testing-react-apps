import { describe, expect, it } from 'vitest';
import { deriveFormsCachedBreakdown } from '../src/features/forms-derive-cached-breakdown';
describe('cached breakdown', () => {
  it('handles zero values', () => { expect(deriveFormsCachedBreakdown([2, 4, 6, 8])).toBe(4); });
});
