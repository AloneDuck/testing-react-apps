import React from 'react';
import { resolveSearchComposableBreakdown } from '../features/search-resolve-composable-breakdown';

type SearchResolveComposableBreakdownCardProps = { values: readonly number[]; label?: string };
export function SearchResolveComposableBreakdownCard({ values, label = 'breakdown' }: SearchResolveComposableBreakdownCardProps) {
  const value = resolveSearchComposableBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
