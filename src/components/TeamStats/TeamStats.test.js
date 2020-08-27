import React from 'react';
import renderWithRouter from '../../testUtils';
import TeamStats from './TeamStats';

describe('TeamStats', () => {
  test('renders TeamStats', () => {
    const { getByText } = renderWithRouter(<TeamStats />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
