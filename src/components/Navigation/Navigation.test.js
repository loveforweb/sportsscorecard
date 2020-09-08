import Navigation from './Navigation';
import React from 'react';
import renderWithRouter from '../../testUtils';

describe('Navigation', () => {
  test('renders Navigation', () => {
    const { getByText, getByLabelText } = renderWithRouter(<Navigation />);
    expect(getByText('News', { type: 'link' })).toBeInTheDocument();
    expect(getByText('Schedule', { type: 'link' })).toBeInTheDocument();
    expect(getByText('Standings', { type: 'link' })).toBeInTheDocument();
    expect(getByText('Teams', { type: 'link' })).toBeInTheDocument();
    expect(
      getByLabelText('Switch to light mode', { type: 'button' })
    ).toBeInTheDocument();
  });
});
