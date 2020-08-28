import React from 'react';
import renderWithRouter from '../../testUtils';
import PlayerStat from './PlayerStat';

describe('PlayerStat', () => {
  test('renders PlayerStat', () => {
    const { getByText } = renderWithRouter(<PlayerStat />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
