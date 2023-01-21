/** rank the cached breakdown from a numeric series. */
export function rankCheckoutCachedBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
