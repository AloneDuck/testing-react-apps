import { describe, expect, it } from 'vitest';
import { deriveSessionsCachedBreakdown } from '../src/features/sessions-derive-cached-breakdown';
describe('cached breakdown', () => {
  it('handles duplicate values', () => { expect(deriveSessionsCachedBreakdown([2, 4, 6, 8])).toBe(6); });
});
