import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './App';

describe('Counter Component', () => {
  test('renders Counter and buttons correctly', () => {
    render(<Counter />);

    expect(screen.getByText(/Counter:/)).toBeInTheDocument();
    expect(screen.getByText(/Increment/)).toBeInTheDocument();
    expect(screen.getByText(/Decrement/)).toBeInTheDocument();
  });

  test('increments the counter when Increment button is clicked', async () => {
    render(<Counter />);

    const incrementButton = screen.getByText('Increment');
    await userEvent.click(incrementButton);

    expect(screen.getByText(/Counter: 1/)).toBeInTheDocument();
  });

  test('decrements the counter when Decrement button is clicked', async () => {
    render(<Counter />);

    const decrementButton = screen.getByText('Decrement');
    await userEvent.click(decrementButton);

    expect(screen.getByText(/Counter: -1/)).toBeInTheDocument();
  });
});
