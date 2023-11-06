/** select the incremental breakdown from a numeric series. */
export function selectCheckoutIncrementalBreakdown(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
