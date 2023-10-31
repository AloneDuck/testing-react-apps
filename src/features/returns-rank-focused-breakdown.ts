/** rank the focused breakdown from a numeric series. */
export function rankReturnsFocusedBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
