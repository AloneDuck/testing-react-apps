import React from 'react';
import { partitionAccessibilityDirectionalBreakdown } from '../features/accessibility-partition-directional-breakdown';

type AccessibilityPartitionDirectionalBreakdownCardProps = { values: readonly number[]; label?: string };
export function AccessibilityPartitionDirectionalBreakdownCard({ values, label = 'breakdown' }: AccessibilityPartitionDirectionalBreakdownCardProps) {
  const value = partitionAccessibilityDirectionalBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
