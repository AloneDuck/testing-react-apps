/** filter the distributed breakdown from a numeric series. */
export function filterWorkflowsDistributedBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
