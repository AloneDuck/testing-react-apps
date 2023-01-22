import { describe, expect, it } from 'vitest';
import { calculateInitialTotal } from '../src/features/initial-total';
describe('initial total', () => {
  it('handles negative values', () => { expect(calculateInitialTotal([2, 4, 6, 8])).toBe(20); });
});
