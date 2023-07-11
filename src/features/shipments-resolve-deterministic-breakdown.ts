/** resolve the deterministic breakdown from a numeric series. */
export function resolveShipmentsDeterministicBreakdown(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
