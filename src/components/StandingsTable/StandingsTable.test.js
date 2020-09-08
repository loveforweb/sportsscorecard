import React from 'react';
import StandingsTable from './StandingsTable';
import data from '../../mock-data/standings-data';
import renderWithRouter from '../../testUtils';
import standingsReducer from '../../reducers/standings-reducer';

const abbr = 'LA';
const stateStandings = standingsReducer([], {
  type: 'CONF',
  payload: {
    id: abbr,
    teams: data.teams,
  },
});

describe('StandingsTable', () => {
  test('renders StandingsTable', () => {
    const { getByText, queryAllByText } = renderWithRouter(
      <StandingsTable {...stateStandings} teamId={abbr} />
    );
    expect(getByText('NFC West')).toBeInTheDocument();
    expect(getByText('San Francisco')).toBeInTheDocument();
    expect(getByText('49ers')).toBeInTheDocument();
    expect(getByText('SF')).toBeInTheDocument();
    expect(getByText('Seattle')).toBeInTheDocument();
    expect(getByText('Seahawks')).toBeInTheDocument();
    expect(getByText('SEA')).toBeInTheDocument();
    expect(getByText('Los Angeles')).toBeInTheDocument();
    expect(getByText('Rams')).toBeInTheDocument();
    expect(getByText('LA')).toBeInTheDocument();
    expect(getByText('Arizona')).toBeInTheDocument();
    expect(getByText('Cardinals')).toBeInTheDocument();
    expect(getByText('ARI')).toBeInTheDocument();
    expect(getByText('P')).toBeInTheDocument();
    expect(getByText('W')).toBeInTheDocument();
    expect(getByText('L')).toBeInTheDocument();
    expect(getByText('T')).toBeInTheDocument();
    expect(getByText('PCT')).toBeInTheDocument();
    expect(getByText('PF')).toBeInTheDocument();
    expect(getByText('PA')).toBeInTheDocument();
    expect(getByText('PD')).toBeInTheDocument();
    expect(queryAllByText('16')).toHaveLength(4);
  });
});
