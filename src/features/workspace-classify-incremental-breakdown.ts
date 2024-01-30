/** classify the incremental breakdown from a numeric series. */
export function classifyWorkspaceIncrementalBreakdown(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
