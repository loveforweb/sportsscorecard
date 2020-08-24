import React from 'react';
import renderWithRouter from '../../testUtils';
import Footer from './Footer';

describe('Footer', () => {
  test('renders Footer', () => {
    const { getByText } = renderWithRouter(<Footer />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
