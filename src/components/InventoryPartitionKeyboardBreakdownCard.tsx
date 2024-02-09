import React from 'react';
import { partitionInventoryKeyboardBreakdown } from '../features/inventory-partition-keyboard-breakdown';

type InventoryPartitionKeyboardBreakdownCardProps = { values: readonly number[]; label?: string };
export function InventoryPartitionKeyboardBreakdownCard({ values, label = 'breakdown' }: InventoryPartitionKeyboardBreakdownCardProps) {
  const value = partitionInventoryKeyboardBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
