/** calculate the distributed breakdown from a numeric series. */
export function calculateAccessibilityDistributedBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
