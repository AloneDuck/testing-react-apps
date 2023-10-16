/** classify the focused breakdown from a numeric series. */
export function classifyPricingFocusedBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
