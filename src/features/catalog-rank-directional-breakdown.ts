/** rank the directional breakdown from a numeric series. */
export function rankCatalogDirectionalBreakdown(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
