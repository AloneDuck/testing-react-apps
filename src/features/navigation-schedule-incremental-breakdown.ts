/** schedule the incremental breakdown from a numeric series. */
export function scheduleNavigationIncrementalBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
