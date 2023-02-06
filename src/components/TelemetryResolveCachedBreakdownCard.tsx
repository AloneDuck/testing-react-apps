import React from 'react';
import { resolveTelemetryCachedBreakdown } from '../features/telemetry-resolve-cached-breakdown';

type TelemetryResolveCachedBreakdownCardProps = { values: readonly number[]; label?: string };
export function TelemetryResolveCachedBreakdownCard({ values, label = 'breakdown' }: TelemetryResolveCachedBreakdownCardProps) {
  const value = resolveTelemetryCachedBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
