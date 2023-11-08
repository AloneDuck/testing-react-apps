/** aggregate the incremental breakdown from a numeric series. */
export function aggregateFiltersIncrementalBreakdown(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
