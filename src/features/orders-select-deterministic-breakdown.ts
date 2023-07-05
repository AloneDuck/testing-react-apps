/** select the deterministic breakdown from a numeric series. */
export function selectOrdersDeterministicBreakdown(values: readonly number[]): number {
  return values.length ? [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)] : 0;
}
