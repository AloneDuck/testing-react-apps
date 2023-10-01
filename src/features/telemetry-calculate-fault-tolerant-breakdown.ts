/** calculate the fault-tolerant breakdown from a numeric series. */
export function calculateTelemetryFaultTolerantBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
