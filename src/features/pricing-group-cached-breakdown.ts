/** group the cached breakdown from a numeric series. */
export function groupPricingCachedBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
