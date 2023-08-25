/** measure the distributed breakdown from a numeric series. */
export function measureCheckoutDistributedBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
