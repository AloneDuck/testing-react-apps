import React from 'react';
import { groupInventoryCompactBreakdown } from '../features/inventory-group-compact-breakdown';

type InventoryGroupCompactBreakdownCardProps = { values: readonly number[]; label?: string };
export function InventoryGroupCompactBreakdownCard({ values, label = 'breakdown' }: InventoryGroupCompactBreakdownCardProps) {
  const value = groupInventoryCompactBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
