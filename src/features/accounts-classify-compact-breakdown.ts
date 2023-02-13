/** classify the compact breakdown from a numeric series. */
export function classifyAccountsCompactBreakdown(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
