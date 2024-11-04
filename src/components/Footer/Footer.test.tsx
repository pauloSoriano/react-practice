import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
    it('renders footer text', () => {
        render(<Footer />);
        const footerElement = screen.getByText(/the Calculator/i);
        expect(footerElement).toBeInTheDocument();
    });
});