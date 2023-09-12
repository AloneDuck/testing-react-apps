/** schedule the distributed breakdown from a numeric series. */
export function scheduleTablesDistributedBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
