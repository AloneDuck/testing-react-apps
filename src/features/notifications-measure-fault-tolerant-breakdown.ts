/** measure the fault-tolerant breakdown from a numeric series. */
export function measureNotificationsFaultTolerantBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
