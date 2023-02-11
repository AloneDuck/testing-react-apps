/** format the cached breakdown from a numeric series. */
export function formatForecastingCachedBreakdown(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
