import React from 'react';
import { deriveStateDeterministicBreakdown } from '../features/state-derive-deterministic-breakdown';

type StateDeriveDeterministicBreakdownCardProps = { values: readonly number[]; label?: string };
export function StateDeriveDeterministicBreakdownCard({ values, label = 'breakdown' }: StateDeriveDeterministicBreakdownCardProps) {
  const value = deriveStateDeterministicBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
