import { describe, expect, it } from 'vitest';
import { measureWorkflowsCachedBreakdown } from '../src/features/workflows-measure-cached-breakdown';
describe('cached breakdown', () => {
  it('handles large values', () => { expect(measureWorkflowsCachedBreakdown([2, 4, 6, 8])).toBe(4); });
});
