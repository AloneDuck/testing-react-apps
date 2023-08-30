import React from 'react';
import { derivePricingDistributedBreakdown } from '../features/pricing-derive-distributed-breakdown';

type PricingDeriveDistributedBreakdownCardProps = { values: readonly number[]; label?: string };
export function PricingDeriveDistributedBreakdownCard({ values, label = 'breakdown' }: PricingDeriveDistributedBreakdownCardProps) {
  const value = derivePricingDistributedBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
