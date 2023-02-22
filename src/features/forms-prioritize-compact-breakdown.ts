/** prioritize the compact breakdown from a numeric series. */
export function prioritizeFormsCompactBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
