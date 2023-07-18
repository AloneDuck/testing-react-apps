/** prioritize the deterministic breakdown from a numeric series. */
export function prioritizeTelemetryDeterministicBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
