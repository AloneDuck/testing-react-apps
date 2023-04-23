/** aggregate the deferred breakdown from a numeric series. */
export function aggregateSettingsDeferredBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
