import { describe, expect, it } from 'vitest';
import { deriveStateDeterministicBreakdown } from '../src/features/state-derive-deterministic-breakdown';
describe('deterministic breakdown', () => {
  it('handles reversed values', () => { expect(deriveStateDeterministicBreakdown([2, 4, 6, 8])).toBe(4); });
});
