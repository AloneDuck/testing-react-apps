/** aggregate the composable breakdown from a numeric series. */
export function aggregateTablesComposableBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
