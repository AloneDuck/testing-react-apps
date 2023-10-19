/** schedule the focused breakdown from a numeric series. */
export function scheduleReportsFocusedBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
