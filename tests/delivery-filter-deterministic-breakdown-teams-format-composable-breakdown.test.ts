import { describe, expect, it } from 'vitest';
import { formatTeamsComposableBreakdown } from '../src/features/teams-format-composable-breakdown';
describe('composable breakdown', () => {
  it('handles large values', () => { expect(formatTeamsComposableBreakdown([2, 4, 6, 8])).toBe(5); });
});
