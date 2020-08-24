import React from 'react';
import renderWithRouter from '../../testUtils';
import Header from './Header';

describe('Header', () => {
  test('renders Header', () => {
    const { getByText } = renderWithRouter(<Header />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
