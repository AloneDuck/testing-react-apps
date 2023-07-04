/** compare the deterministic breakdown from a numeric series. */
export function compareLayoutDeterministicBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
