import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Main from './Main';

describe('Main', () => {
    it('renders header, footer, and calculator button', () => {
        render(<Main />);
        expect(screen.getByText(/Open Calculator/i)).toBeInTheDocument();
    });

    it('updates calculator result', () => {
        render(<Main />);
        fireEvent.click(screen.getByText(/Open Calculator/i));
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('+'));
        fireEvent.click(screen.getByText('2'));
        fireEvent.click(screen.getByText('='));
        fireEvent.click(screen.getByLabelText(/Close popup modal/i));
        expect(screen.getByLabelText(/Calculator Result/i)).toHaveValue('3');
    });
});