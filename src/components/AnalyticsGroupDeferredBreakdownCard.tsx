import React from 'react';
import { groupAnalyticsDeferredBreakdown } from '../features/analytics-group-deferred-breakdown';

type AnalyticsGroupDeferredBreakdownCardProps = { values: readonly number[]; label?: string };
export function AnalyticsGroupDeferredBreakdownCard({ values, label = 'breakdown' }: AnalyticsGroupDeferredBreakdownCardProps) {
  const value = groupAnalyticsDeferredBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
