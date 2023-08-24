import { describe, expect, it } from 'vitest';
import { classifySessionsDeterministicBreakdown } from '../src/features/sessions-classify-deterministic-breakdown';
describe('deterministic breakdown', () => {
  it('handles empty input', () => { expect(classifySessionsDeterministicBreakdown([2, 4, 6, 8])).toBe(2); });
});
