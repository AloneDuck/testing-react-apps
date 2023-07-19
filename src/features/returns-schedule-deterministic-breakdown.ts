/** schedule the deterministic breakdown from a numeric series. */
export function scheduleReturnsDeterministicBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
