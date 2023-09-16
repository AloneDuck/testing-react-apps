/** calculate the distributed breakdown from a numeric series. */
export function calculateNotificationsDistributedBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
