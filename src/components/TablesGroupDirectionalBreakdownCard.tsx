import React from 'react';
import { groupTablesDirectionalBreakdown } from '../features/tables-group-directional-breakdown';

type TablesGroupDirectionalBreakdownCardProps = { values: readonly number[]; label?: string };
export function TablesGroupDirectionalBreakdownCard({ values, label = 'breakdown' }: TablesGroupDirectionalBreakdownCardProps) {
  const value = groupTablesDirectionalBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
