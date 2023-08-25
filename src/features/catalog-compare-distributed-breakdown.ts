/** compare the distributed breakdown from a numeric series. */
export function compareCatalogDistributedBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
