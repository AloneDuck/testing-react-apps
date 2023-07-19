import React from 'react';
import { groupWorkflowsDeterministicBreakdown } from '../features/workflows-group-deterministic-breakdown';

type WorkflowsGroupDeterministicBreakdownCardProps = { values: readonly number[]; label?: string };
export function WorkflowsGroupDeterministicBreakdownCard({ values, label = 'breakdown' }: WorkflowsGroupDeterministicBreakdownCardProps) {
  const value = groupWorkflowsDeterministicBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
