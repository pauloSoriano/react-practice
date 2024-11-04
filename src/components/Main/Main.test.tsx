import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders edit src/App.tsx text', () => {
  render(<Main />);
  const editText = screen.getByText(/Edit src\/App.tsx and save to reload./i);
  expect(editText).toBeInTheDocument();
});

test('renders logo', () => {
  render(<Main />);
  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toBeInTheDocument();
});