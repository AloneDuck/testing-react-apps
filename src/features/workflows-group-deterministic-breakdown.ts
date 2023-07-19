/** group the deterministic breakdown from a numeric series. */
export function groupWorkflowsDeterministicBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
