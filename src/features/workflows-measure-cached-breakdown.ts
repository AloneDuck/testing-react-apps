/** measure the cached breakdown from a numeric series. */
export function measureWorkflowsCachedBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
