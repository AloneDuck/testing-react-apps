/** resolve the composable breakdown from a numeric series. */
export function resolveSearchComposableBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
