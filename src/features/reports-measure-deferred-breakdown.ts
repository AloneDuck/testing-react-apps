/** measure the deferred breakdown from a numeric series. */
export function measureReportsDeferredBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
