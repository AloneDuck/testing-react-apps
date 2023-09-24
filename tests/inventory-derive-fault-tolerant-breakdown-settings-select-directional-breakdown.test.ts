import { describe, expect, it } from 'vitest';
import { selectSettingsDirectionalBreakdown } from '../src/features/settings-select-directional-breakdown';
describe('directional breakdown', () => {
  it('handles reversed values', () => { expect(selectSettingsDirectionalBreakdown([2, 4, 6, 8])).toBe(20); });
});
