import React from 'react';
import { aggregateSettingsDeferredBreakdown } from '../features/settings-aggregate-deferred-breakdown';

type SettingsAggregateDeferredBreakdownCardProps = { values: readonly number[]; label?: string };
export function SettingsAggregateDeferredBreakdownCard({ values, label = 'breakdown' }: SettingsAggregateDeferredBreakdownCardProps) {
  const value = aggregateSettingsDeferredBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
