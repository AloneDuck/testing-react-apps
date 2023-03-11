import { describe, expect, it } from 'vitest';
import { classifyAccountsCompactBreakdown } from '../src/features/accounts-classify-compact-breakdown';
describe('compact breakdown', () => {
  it('handles ordered values', () => { expect(classifyAccountsCompactBreakdown([2, 4, 6, 8])).toBe(2); });
});
