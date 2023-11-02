/** index the incremental breakdown from a numeric series. */
export function indexAccessibilityIncrementalBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
