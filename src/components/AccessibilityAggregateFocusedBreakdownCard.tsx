import React from 'react';
import { aggregateAccessibilityFocusedBreakdown } from '../features/accessibility-aggregate-focused-breakdown';

type AccessibilityAggregateFocusedBreakdownCardProps = { values: readonly number[]; label?: string };
export function AccessibilityAggregateFocusedBreakdownCard({ values, label = 'breakdown' }: AccessibilityAggregateFocusedBreakdownCardProps) {
  const value = aggregateAccessibilityFocusedBreakdown(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
