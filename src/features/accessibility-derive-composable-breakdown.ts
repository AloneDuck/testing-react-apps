/** derive the composable breakdown from a numeric series. */
export function deriveAccessibilityComposableBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
