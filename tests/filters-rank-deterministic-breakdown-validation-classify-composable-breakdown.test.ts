import { describe, expect, it } from 'vitest';
import { classifyValidationComposableBreakdown } from '../src/features/validation-classify-composable-breakdown';
describe('composable breakdown', () => {
  it('handles repeated values', () => { expect(classifyValidationComposableBreakdown([2, 4, 6, 8])).toBe(2); });
});
