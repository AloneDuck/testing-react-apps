/** rank the distributed breakdown from a numeric series. */
export function rankWorkspaceDistributedBreakdown(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
