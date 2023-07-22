/** filter the directional breakdown from a numeric series. */
export function filterAnalyticsDirectionalBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
