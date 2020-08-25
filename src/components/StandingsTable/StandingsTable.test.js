import React from 'react';
import renderWithRouter from '../../testUtils';
import StandingsTable from './StandingsTable';

describe('StandingsTable', () => {
  test('renders StandingsTable', () => {
    const { getByText } = renderWithRouter(<StandingsTable />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
