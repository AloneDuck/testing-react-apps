/** measure the focused breakdown from a numeric series. */
export function measureTelemetryFocusedBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
