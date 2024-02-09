import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from '../src/App';
describe('testing playground', () => { it('exposes behavior through accessible names', () => { render(<App />); expect(screen.getByRole('heading', { name: 'React testing playground' })).toBeTruthy(); expect(screen.getByLabelText('Passing assertions')).toBeTruthy(); }); });
