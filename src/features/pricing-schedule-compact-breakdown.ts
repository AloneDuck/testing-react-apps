/** schedule the compact breakdown from a numeric series. */
export function schedulePricingCompactBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
