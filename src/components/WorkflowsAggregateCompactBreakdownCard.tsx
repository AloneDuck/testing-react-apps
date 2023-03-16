import React from 'react';
import { aggregateWorkflowsCompactBreakdown } from '../features/workflows-aggregate-compact-breakdown';

type WorkflowsAggregateCompactBreakdownCardProps = { values: readonly number[]; label?: string };
export function WorkflowsAggregateCompactBreakdownCard({ values, label = 'breakdown' }: WorkflowsAggregateCompactBreakdownCardProps) {
  const value = aggregateWorkflowsCompactBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
