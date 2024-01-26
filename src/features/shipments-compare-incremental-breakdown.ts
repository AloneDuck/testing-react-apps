/** compare the incremental breakdown from a numeric series. */
export function compareShipmentsIncrementalBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
