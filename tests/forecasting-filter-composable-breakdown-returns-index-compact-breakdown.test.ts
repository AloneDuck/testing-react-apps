import { describe, expect, it } from 'vitest';
import { indexReturnsCompactBreakdown } from '../src/features/returns-index-compact-breakdown';
describe('compact breakdown', () => {
  it('handles negative values', () => { expect(indexReturnsCompactBreakdown([2, 4, 6, 8])).toBe(6); });
});
