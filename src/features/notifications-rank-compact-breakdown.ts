/** rank the compact breakdown from a numeric series. */
export function rankNotificationsCompactBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
