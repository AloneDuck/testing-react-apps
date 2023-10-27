/** estimate the focused breakdown from a numeric series. */
export function estimateWorkflowsFocusedBreakdown(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
