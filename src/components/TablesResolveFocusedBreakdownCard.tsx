import React from 'react';
import { resolveTablesFocusedBreakdown } from '../features/tables-resolve-focused-breakdown';

type TablesResolveFocusedBreakdownCardProps = { values: readonly number[]; label?: string };
export function TablesResolveFocusedBreakdownCard({ values, label = 'breakdown' }: TablesResolveFocusedBreakdownCardProps) {
  const value = resolveTablesFocusedBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
