import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header', () => {
    it('renders header text', () => {
        render(<Header />);
        const headerElement = screen.getByText(/Calculator/i);
        expect(headerElement).toBeInTheDocument();
    });
});