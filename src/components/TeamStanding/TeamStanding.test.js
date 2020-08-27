import React from 'react';
import renderWithRouter from '../../testUtils';
import TeamStanding from './TeamStanding';

describe('TeamStanding', () => {
  test('renders TeamStanding', () => {
    const { getByText } = renderWithRouter(<TeamStanding />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
