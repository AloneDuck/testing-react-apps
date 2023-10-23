/** filter the focused breakdown from a numeric series. */
export function filterSettingsFocusedBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
