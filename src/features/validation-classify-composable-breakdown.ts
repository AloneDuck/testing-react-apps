/** classify the composable breakdown from a numeric series. */
export function classifyValidationComposableBreakdown(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
