import React from 'react';
import renderWithRouter from '../../testUtils';
import GameHeader from './GameHeader';

describe('GameHeader', () => {
  test('renders GameHeader', () => {
    const { getByText } = renderWithRouter(<GameHeader />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
