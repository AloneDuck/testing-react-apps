/** derive the deterministic breakdown from a numeric series. */
export function deriveStateDeterministicBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
