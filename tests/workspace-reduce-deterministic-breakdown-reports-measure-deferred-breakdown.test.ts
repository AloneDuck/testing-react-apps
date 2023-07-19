import { describe, expect, it } from 'vitest';
import { measureReportsDeferredBreakdown } from '../src/features/reports-measure-deferred-breakdown';
describe('deferred breakdown', () => {
  it('handles sparse values', () => { expect(measureReportsDeferredBreakdown([2, 4, 6, 8])).toBe(4); });
});
