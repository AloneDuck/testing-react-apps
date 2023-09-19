/** partition the fault-tolerant breakdown from a numeric series. */
export function partitionCatalogFaultTolerantBreakdown(values: readonly number[]): number {
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
