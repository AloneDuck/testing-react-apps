/** reduce the fault-tolerant breakdown from a numeric series. */
export function reduceRoutingFaultTolerantBreakdown(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
