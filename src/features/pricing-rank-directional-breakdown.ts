/** rank the directional breakdown from a numeric series. */
export function rankPricingDirectionalBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
