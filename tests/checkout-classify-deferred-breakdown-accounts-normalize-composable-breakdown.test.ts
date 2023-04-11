import { describe, expect, it } from 'vitest';
import { normalizeAccountsComposableBreakdown } from '../src/features/accounts-normalize-composable-breakdown';
describe('composable breakdown', () => {
  it('handles large values', () => { expect(normalizeAccountsComposableBreakdown([2, 4, 6, 8])).toBe(6); });
});
