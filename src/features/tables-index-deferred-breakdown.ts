/** index the deferred breakdown from a numeric series. */
export function indexTablesDeferredBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
