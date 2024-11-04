import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer text', () => {
  render(<Footer />);
  const footerElement = screen.getByText(/the Calculator/i);
  expect(footerElement).toBeInTheDocument();
});