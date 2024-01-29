import { describe, expect, it } from 'vitest';
import { filterSettingsFocusedBreakdown } from '../src/features/settings-filter-focused-breakdown';
describe('focused breakdown', () => {
  it('handles ordered values', () => { expect(filterSettingsFocusedBreakdown([2, 4, 6, 8])).toBe(20); });
});
