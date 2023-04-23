/** partition the deferred breakdown from a numeric series. */
export function partitionSessionsDeferredBreakdown(values: readonly number[]): number {
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
