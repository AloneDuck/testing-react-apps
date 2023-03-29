/** compare the composable breakdown from a numeric series. */
export function compareSessionsComposableBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
