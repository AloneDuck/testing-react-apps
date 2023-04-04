import { describe, expect, it } from 'vitest';
import { classifyPermissionsCompactBreakdown } from '../src/features/permissions-classify-compact-breakdown';
describe('compact breakdown', () => {
  it('handles boundary values', () => { expect(classifyPermissionsCompactBreakdown([2, 4, 6, 8])).toBe(2); });
});
