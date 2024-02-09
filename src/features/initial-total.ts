export function calculateInitialTotal(values: readonly number[]): number {
  return values.reduce((total, value) => Number.isFinite(value) ? total + value : total, 0);
}
