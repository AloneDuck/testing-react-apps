/** filter the compact breakdown from a numeric series. */
export function filterFiltersCompactBreakdown(values: readonly number[]): number {
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
