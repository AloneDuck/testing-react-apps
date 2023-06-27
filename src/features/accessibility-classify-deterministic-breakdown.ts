/** classify the deterministic breakdown from a numeric series. */
export function classifyAccessibilityDeterministicBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
