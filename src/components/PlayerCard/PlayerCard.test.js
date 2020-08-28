import React from 'react';
import renderWithRouter from '../../testUtils';
import PlayerCard from './PlayerCard';

describe('PlayerCard', () => {
  test('renders PlayerCard', () => {
    const { getByText } = renderWithRouter(<PlayerCard />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
