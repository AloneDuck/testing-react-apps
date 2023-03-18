import React from 'react';
import { deriveAccessibilityComposableBreakdown } from '../features/accessibility-derive-composable-breakdown';

type AccessibilityDeriveComposableBreakdownCardProps = { values: readonly number[]; label?: string };
export function AccessibilityDeriveComposableBreakdownCard({ values, label = 'breakdown' }: AccessibilityDeriveComposableBreakdownCardProps) {
  const value = deriveAccessibilityComposableBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
