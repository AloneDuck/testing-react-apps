/** resolve the cached breakdown from a numeric series. */
export function resolveTelemetryCachedBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
