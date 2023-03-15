/** estimate the compact breakdown from a numeric series. */
export function estimateTelemetryCompactBreakdown(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
