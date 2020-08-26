import React from 'react';
import renderWithRouter from '../../testUtils';
import TeamCard from './TeamCard';

describe('TeamCard', () => {
  test('renders TeamCard', () => {
    const { getByText } = renderWithRouter(<TeamCard />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
