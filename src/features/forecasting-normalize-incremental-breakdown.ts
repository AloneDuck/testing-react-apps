/** normalize the incremental breakdown from a numeric series. */
export function normalizeForecastingIncrementalBreakdown(values: readonly number[]): number {
  return values.length ? [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)] : 0;
}
