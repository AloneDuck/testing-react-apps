/** classify the focused breakdown from a numeric series. */
export function classifyForecastingFocusedBreakdown(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
