/** measure the incremental breakdown from a numeric series. */
export function measureStateIncrementalBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
