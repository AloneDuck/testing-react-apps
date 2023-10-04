/** aggregate the focused breakdown from a numeric series. */
export function aggregateAccessibilityFocusedBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
