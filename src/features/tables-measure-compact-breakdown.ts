/** measure the compact breakdown from a numeric series. */
export function measureTablesCompactBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
