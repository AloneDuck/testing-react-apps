import { describe, expect, it } from 'vitest';
import { measureSettingsComposableBreakdown } from '../src/features/settings-measure-composable-breakdown';
describe('composable breakdown', () => {
  it('handles negative values', () => { expect(measureSettingsComposableBreakdown([2, 4, 6, 8])).toBe(4); });
});
