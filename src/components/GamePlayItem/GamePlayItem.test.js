import React from 'react';
import renderWithRouter from '../../testUtils';
import GamePlayItem from './GamePlayItem';

describe('GamePlayItem', () => {
  test('renders GamePlayItem', () => {
    const { getByText } = renderWithRouter(<GamePlayItem />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
