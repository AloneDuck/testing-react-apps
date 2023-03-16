/** aggregate the compact breakdown from a numeric series. */
export function aggregateWorkflowsCompactBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
