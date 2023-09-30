/** filter the fault-tolerant breakdown from a numeric series. */
export function filterTablesFaultTolerantBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
