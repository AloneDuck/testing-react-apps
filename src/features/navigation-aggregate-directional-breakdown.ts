/** aggregate the directional breakdown from a numeric series. */
export function aggregateNavigationDirectionalBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
