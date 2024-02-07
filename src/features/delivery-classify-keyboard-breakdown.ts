/** classify the keyboard breakdown from a numeric series. */
export function classifyDeliveryKeyboardBreakdown(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
