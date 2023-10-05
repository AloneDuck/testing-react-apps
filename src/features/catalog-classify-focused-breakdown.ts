/** classify the focused breakdown from a numeric series. */
export function classifyCatalogFocusedBreakdown(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
