import { describe, expect, it } from 'vitest';
import { groupWorkflowsDeterministicBreakdown } from '../src/features/workflows-group-deterministic-breakdown';
describe('deterministic breakdown', () => {
  it('handles zero values', () => { expect(groupWorkflowsDeterministicBreakdown([2, 4, 6, 8])).toBe(8); });
});
