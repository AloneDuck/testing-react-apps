/** resolve the fault-tolerant breakdown from a numeric series. */
export function resolveFulfillmentFaultTolerantBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
