/** select the composable breakdown from a numeric series. */
export function selectAnalyticsComposableBreakdown(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
