import React from 'react';
import { groupReturnsDeferredBreakdown } from '../features/returns-group-deferred-breakdown';

type ReturnsGroupDeferredBreakdownCardProps = { values: readonly number[]; label?: string };
export function ReturnsGroupDeferredBreakdownCard({ values, label = 'breakdown' }: ReturnsGroupDeferredBreakdownCardProps) {
  const value = groupReturnsDeferredBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
