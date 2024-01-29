import React from 'react';
import { aggregateTelemetryIncrementalBreakdown } from '../features/telemetry-aggregate-incremental-breakdown';

type TelemetryAggregateIncrementalBreakdownCardProps = { values: readonly number[]; label?: string };
export function TelemetryAggregateIncrementalBreakdownCard({ values, label = 'breakdown' }: TelemetryAggregateIncrementalBreakdownCardProps) {
  const value = aggregateTelemetryIncrementalBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
