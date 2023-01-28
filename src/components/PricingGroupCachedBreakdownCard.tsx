import React from 'react';
import { groupPricingCachedBreakdown } from '../features/pricing-group-cached-breakdown';

type PricingGroupCachedBreakdownCardProps = { values: readonly number[]; label?: string };
export function PricingGroupCachedBreakdownCard({ values, label = 'breakdown' }: PricingGroupCachedBreakdownCardProps) {
  const value = groupPricingCachedBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
