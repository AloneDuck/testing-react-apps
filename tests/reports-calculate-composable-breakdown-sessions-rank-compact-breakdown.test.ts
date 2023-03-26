import { describe, expect, it } from 'vitest';
import { rankSessionsCompactBreakdown } from '../src/features/sessions-rank-compact-breakdown';
describe('compact breakdown', () => {
  it('handles fractional values', () => { expect(rankSessionsCompactBreakdown([2, 4, 6, 8])).toBe(5); });
});
