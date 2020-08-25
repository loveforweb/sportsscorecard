import React from 'react';
import renderWithRouter from '../../testUtils';
import FixtureCard from './FixtureCard';

describe('FixtureCard', () => {
  test('renders FixtureCard', () => {
    const { getByText } = renderWithRouter(<FixtureCard />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
