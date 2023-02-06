/** group the cached breakdown from a numeric series. */
export function groupTeamsCachedBreakdown(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
