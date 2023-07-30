import { describe, expect, it } from 'vitest';
import { normalizeValidationDeferredBreakdown } from '../src/features/validation-normalize-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles single values', () => { expect(normalizeValidationDeferredBreakdown([2, 4, 6, 8])).toBe(6); });
});
