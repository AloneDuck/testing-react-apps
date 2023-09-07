import { describe, expect, it } from 'vitest';
import { summarizeAccountsDirectionalBreakdown } from '../src/features/accounts-summarize-directional-breakdown';
describe('directional breakdown', () => {
  it('handles sparse values', () => { expect(summarizeAccountsDirectionalBreakdown([2, 4, 6, 8])).toBe(4); });
});
