import React from 'react';
import renderWithRouter from '../../testUtils';
import Navigation from './Navigation';

describe('Navigation', () => {
  test('renders Navigation', () => {
    const { getByText } = renderWithRouter(<Navigation />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
