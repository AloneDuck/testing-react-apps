/** measure the composable breakdown from a numeric series. */
export function measureSettingsComposableBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
