/** group the deferred breakdown from a numeric series. */
export function groupReturnsDeferredBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
