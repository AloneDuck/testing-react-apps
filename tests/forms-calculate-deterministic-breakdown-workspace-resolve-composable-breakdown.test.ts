import { describe, expect, it } from 'vitest';
import { resolveWorkspaceComposableBreakdown } from '../src/features/workspace-resolve-composable-breakdown';
describe('composable breakdown', () => {
  it('handles fractional values', () => { expect(resolveWorkspaceComposableBreakdown([2, 4, 6, 8])).toBe(60); });
});
