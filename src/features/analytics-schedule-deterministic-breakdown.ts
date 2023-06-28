/** schedule the deterministic breakdown from a numeric series. */
export function scheduleAnalyticsDeterministicBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
