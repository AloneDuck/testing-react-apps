import React from 'react';
import { partitionFormsDeferredBreakdown } from '../features/forms-partition-deferred-breakdown';

type FormsPartitionDeferredBreakdownCardProps = { values: readonly number[]; label?: string };
export function FormsPartitionDeferredBreakdownCard({ values, label = 'breakdown' }: FormsPartitionDeferredBreakdownCardProps) {
  const value = partitionFormsDeferredBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
