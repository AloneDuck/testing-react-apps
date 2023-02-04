/** filter the cached breakdown from a numeric series. */
export function filterStateCachedBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
