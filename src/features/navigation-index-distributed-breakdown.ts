/** index the distributed breakdown from a numeric series. */
export function indexNavigationDistributedBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
