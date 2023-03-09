import React from 'react';
import { partitionReportsCompactBreakdown } from '../features/reports-partition-compact-breakdown';

type ReportsPartitionCompactBreakdownCardProps = { values: readonly number[]; label?: string };
export function ReportsPartitionCompactBreakdownCard({ values, label = 'breakdown' }: ReportsPartitionCompactBreakdownCardProps) {
  const value = partitionReportsCompactBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
