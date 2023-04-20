/** group the deferred breakdown from a numeric series. */
export function groupOrdersDeferredBreakdown(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
