import React from 'react';
import { aggregateTablesComposableBreakdown } from '../features/tables-aggregate-composable-breakdown';

type TablesAggregateComposableBreakdownCardProps = { values: readonly number[]; label?: string };
export function TablesAggregateComposableBreakdownCard({ values, label = 'breakdown' }: TablesAggregateComposableBreakdownCardProps) {
  const value = aggregateTablesComposableBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
