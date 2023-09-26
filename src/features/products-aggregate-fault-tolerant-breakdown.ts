/** aggregate the fault-tolerant breakdown from a numeric series. */
export function aggregateProductsFaultTolerantBreakdown(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
