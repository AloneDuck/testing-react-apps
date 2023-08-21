import { describe, expect, it } from 'vitest';
import { compareLayoutDeterministicBreakdown } from '../src/features/layout-compare-deterministic-breakdown';
describe('deterministic breakdown', () => {
  it('handles reversed values', () => { expect(compareLayoutDeterministicBreakdown([2, 4, 6, 8])).toBe(60); });
});
