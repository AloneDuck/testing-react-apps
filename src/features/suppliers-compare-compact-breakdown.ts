/** compare the compact breakdown from a numeric series. */
export function compareSuppliersCompactBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
