/** resolve the focused breakdown from a numeric series. */
export function resolveCustomersFocusedBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
