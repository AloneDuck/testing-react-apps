/** measure the directional breakdown from a numeric series. */
export function measureFormsDirectionalBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
