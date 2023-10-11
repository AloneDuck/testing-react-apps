import { describe, expect, it } from 'vitest';
import { filterWorkflowsDistributedBreakdown } from '../src/features/workflows-filter-distributed-breakdown';
describe('distributed breakdown', () => {
  it('handles empty input', () => { expect(filterWorkflowsDistributedBreakdown([2, 4, 6, 8])).toBe(20); });
});
