import GameStats from './GameStats';
import React from 'react';
import data from '../../mock-data/box-score';
import gameReducer from '../../reducers/game-reducer';
import renderWithRouter from '../../testUtils';

const stateAwayTeam = gameReducer([], {
  type: 'AWAY_TEAM',
  payload: data,
});

const stateHomeTeam = gameReducer([], {
  type: 'HOME_TEAM',
  payload: data,
});

describe('GameStats', () => {
  test('renders GameStats', () => {
    const { getByText, getAllByText } = renderWithRouter(
      <GameStats
        homeTeamAbbr={stateHomeTeam[0].abbreviation}
        awayTeamAbbr={stateAwayTeam[0].abbreviation}
        homeTeam={data.stats.home.teamStats[0]}
        awayTeam={data.stats.away.teamStats[0]}
      />
    );
    expect(getByText('LA')).toBeInTheDocument();
    expect(getByText('CAR')).toBeInTheDocument();
    expect(getByText('349')).toBeInTheDocument();
    expect(getByText('TOTAL YARDS')).toBeInTheDocument();
    expect(getByText('480')).toBeInTheDocument();
    expect(getByText('239')).toBeInTheDocument();
    expect(getByText('PASSING YARDS')).toBeInTheDocument();
    expect(getByText('233')).toBeInTheDocument();
    expect(getByText('229')).toBeInTheDocument();
    expect(getByText('RUSHING YARDS')).toBeInTheDocument();
    expect(getByText('87')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('AVERAGE YARDS PER PLAY')).toBeInTheDocument();
    expect(getByText('4.4')).toBeInTheDocument();
    expect(getByText('FUMBLES')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
    expect(getByText('INTERCEPTIONS THROWN')).toBeInTheDocument();
    expect(getByText('SACKS ACHIEVED')).toBeInTheDocument();
    expect(getByText('PENALTIES')).toBeInTheDocument();
    expect(getAllByText('6')).toHaveLength(2);
    expect(getAllByText('2')).toHaveLength(2);
    expect(getAllByText('1')).toHaveLength(3);
  });
});
