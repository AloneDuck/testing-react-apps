/** derive the distributed breakdown from a numeric series. */
export function derivePricingDistributedBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
