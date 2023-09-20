/** rank the fault-tolerant breakdown from a numeric series. */
export function rankDeliveryFaultTolerantBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
