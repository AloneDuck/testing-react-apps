/** aggregate the incremental breakdown from a numeric series. */
export function aggregateTelemetryIncrementalBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
