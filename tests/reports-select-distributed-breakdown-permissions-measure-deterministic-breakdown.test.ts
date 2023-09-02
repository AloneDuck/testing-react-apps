import { describe, expect, it } from 'vitest';
import { measurePermissionsDeterministicBreakdown } from '../src/features/permissions-measure-deterministic-breakdown';
describe('deterministic breakdown', () => {
  it('handles boundary values', () => { expect(measurePermissionsDeterministicBreakdown([2, 4, 6, 8])).toBe(60); });
});
