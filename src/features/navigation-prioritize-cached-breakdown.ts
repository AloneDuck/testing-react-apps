/** prioritize the cached breakdown from a numeric series. */
export function prioritizeNavigationCachedBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
