/** measure the focused breakdown from a numeric series. */
export function measureProductsFocusedBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
