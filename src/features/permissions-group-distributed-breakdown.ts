/** group the distributed breakdown from a numeric series. */
export function groupPermissionsDistributedBreakdown(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
