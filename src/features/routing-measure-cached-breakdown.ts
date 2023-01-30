/** measure the cached breakdown from a numeric series. */
export function measureRoutingCachedBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
