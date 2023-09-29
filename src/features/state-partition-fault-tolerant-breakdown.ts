/** partition the fault-tolerant breakdown from a numeric series. */
export function partitionStateFaultTolerantBreakdown(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
