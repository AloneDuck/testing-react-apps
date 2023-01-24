/** derive the cached breakdown from a numeric series. */
export function deriveFormsCachedBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
