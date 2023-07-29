import React from 'react';
import { aggregateNavigationDirectionalBreakdown } from '../features/navigation-aggregate-directional-breakdown';

type NavigationAggregateDirectionalBreakdownCardProps = { values: readonly number[]; label?: string };
export function NavigationAggregateDirectionalBreakdownCard({ values, label = 'breakdown' }: NavigationAggregateDirectionalBreakdownCardProps) {
  const value = aggregateNavigationDirectionalBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
