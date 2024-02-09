import React from 'react';
import { calculateInitialTotal } from '../features/initial-total';

type MetricCardProps = { label: string; values: readonly number[] };
export function MetricCard({ label, values }: MetricCardProps) {
  return <section aria-label={label} data-testid="metric-card"><h2>{label}</h2><output aria-live="polite">{calculateInitialTotal(values)}</output></section>;
}
