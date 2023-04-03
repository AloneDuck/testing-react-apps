import { describe, expect, it } from 'vitest';
import { partitionValidationCompactBreakdown } from '../src/features/validation-partition-compact-breakdown';
describe('compact breakdown', () => {
  it('handles fractional values', () => { expect(partitionValidationCompactBreakdown([2, 4, 6, 8])).toBe(4); });
});
