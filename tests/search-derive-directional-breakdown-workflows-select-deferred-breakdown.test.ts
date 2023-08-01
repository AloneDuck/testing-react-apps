import { describe, expect, it } from 'vitest';
import { selectWorkflowsDeferredBreakdown } from '../src/features/workflows-select-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles reversed values', () => { expect(selectWorkflowsDeferredBreakdown([2, 4, 6, 8])).toBe(20); });
});
