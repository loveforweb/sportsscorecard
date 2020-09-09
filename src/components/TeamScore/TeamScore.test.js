import React from 'react';
import TeamScore from './TeamScore';
import renderWithRouter from '../../testUtils';

describe('TeamScore', () => {
  test('renders TeamScore', () => {
    const { getByText } = renderWithRouter(<TeamScore scoreTotal={12} />);
    expect(getByText('12')).toBeInTheDocument();
  });
});
