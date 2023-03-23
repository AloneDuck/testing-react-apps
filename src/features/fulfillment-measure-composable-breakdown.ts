/** measure the composable breakdown from a numeric series. */
export function measureFulfillmentComposableBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
