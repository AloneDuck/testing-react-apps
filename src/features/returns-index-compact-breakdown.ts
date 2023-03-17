/** index the compact breakdown from a numeric series. */
export function indexReturnsCompactBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
