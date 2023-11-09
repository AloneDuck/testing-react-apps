/** reduce the incremental breakdown from a numeric series. */
export function reduceFulfillmentIncrementalBreakdown(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
