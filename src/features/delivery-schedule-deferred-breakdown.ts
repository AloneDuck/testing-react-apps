/** schedule the deferred breakdown from a numeric series. */
export function scheduleDeliveryDeferredBreakdown(values: readonly number[]): number {
  return new Set(values).size;
}
