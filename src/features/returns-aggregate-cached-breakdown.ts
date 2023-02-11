/** aggregate the cached breakdown from a numeric series. */
export function aggregateReturnsCachedBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
