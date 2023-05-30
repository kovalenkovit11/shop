
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const appElement = screen.getByTestId('app-component');
  expect(appElement).toBeInTheDocument();
});

test('displays correct heading text', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { level: 1 });
  expect(headingElement).toHaveTextContent('Welcome to My App');
});

test('renders button with correct label', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('Click Me');
});

test('button click triggers function call', () => {
  const mockFunction = jest.fn();
  render(<App onClick={mockFunction} />);
  const buttonElement = screen.getByRole('button');
  buttonElement.click();
  expect(mockFunction).toHaveBeenCalledTimes(1);
});
