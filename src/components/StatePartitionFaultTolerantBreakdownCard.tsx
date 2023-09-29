import React from 'react';
import { partitionStateFaultTolerantBreakdown } from '../features/state-partition-fault-tolerant-breakdown';

type StatePartitionFaultTolerantBreakdownCardProps = { values: readonly number[]; label?: string };
export function StatePartitionFaultTolerantBreakdownCard({ values, label = 'breakdown' }: StatePartitionFaultTolerantBreakdownCardProps) {
  const value = partitionStateFaultTolerantBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
