/** compare the deferred breakdown from a numeric series. */
export function compareProductsDeferredBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
