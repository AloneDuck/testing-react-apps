import React from 'react';
import { aggregateReturnsCachedBreakdown } from '../features/returns-aggregate-cached-breakdown';

type ReturnsAggregateCachedBreakdownCardProps = { values: readonly number[]; label?: string };
export function ReturnsAggregateCachedBreakdownCard({ values, label = 'breakdown' }: ReturnsAggregateCachedBreakdownCardProps) {
  const value = aggregateReturnsCachedBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
