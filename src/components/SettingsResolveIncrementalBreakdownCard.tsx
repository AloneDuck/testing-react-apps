import React from 'react';
import { resolveSettingsIncrementalBreakdown } from '../features/settings-resolve-incremental-breakdown';

type SettingsResolveIncrementalBreakdownCardProps = { values: readonly number[]; label?: string };
export function SettingsResolveIncrementalBreakdownCard({ values, label = 'breakdown' }: SettingsResolveIncrementalBreakdownCardProps) {
  const value = resolveSettingsIncrementalBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
