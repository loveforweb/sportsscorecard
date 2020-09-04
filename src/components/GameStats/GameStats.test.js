import React from 'react';
import renderWithRouter from '../../testUtils';
import GameStats from './GameStats';

describe('GameStats', () => {
  test('renders GameStats', () => {
    const { getByText } = renderWithRouter(<GameStats />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
