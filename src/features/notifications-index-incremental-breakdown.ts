/** index the incremental breakdown from a numeric series. */
export function indexNotificationsIncrementalBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
