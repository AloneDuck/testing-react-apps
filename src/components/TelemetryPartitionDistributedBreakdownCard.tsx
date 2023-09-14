import React from 'react';
import { partitionTelemetryDistributedBreakdown } from '../features/telemetry-partition-distributed-breakdown';

type TelemetryPartitionDistributedBreakdownCardProps = { values: readonly number[]; label?: string };
export function TelemetryPartitionDistributedBreakdownCard({ values, label = 'breakdown' }: TelemetryPartitionDistributedBreakdownCardProps) {
  const value = partitionTelemetryDistributedBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
