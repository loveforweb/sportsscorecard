import FixtureCard from './FixtureCard';
import React from 'react';
import fixturesData from '../../mock-data/fixtures-data';
import fixturesReducer from '../../reducers/fixtures-reducer';
import renderWithRouter from '../../testUtils';
import resultsData from '../../mock-data/results-data';
import { screen } from '@testing-library/react';
import standingsData from '../../mock-data/standings-data';

const fixtureDispatch = {
  type: 'FILTER',
  payload: fixturesData,
};

const resultsDispatch = {
  type: 'FILTER',
  payload: resultsData,
};

const gameFixtureData = fixturesReducer([], fixtureDispatch);
const gameResultsData = fixturesReducer([], resultsDispatch);
const awayTeamId = 76;
const homeTeamId = 68;

const awayTeamStats = standingsData.teams.filter(({ team }) => {
  return awayTeamId === team.id;
});
const homeTeamStats = standingsData.teams.filter(({ team }) => {
  return homeTeamId === team.id;
});

describe('FixtureCard', () => {
  test('renders FixtureCard', () => {
    const showTimeOnly = true;

    const { getByText } = renderWithRouter(
      <FixtureCard
        gameData={gameFixtureData[0].games[0]}
        isFixture
        showTimeOnly={showTimeOnly}
        awayTeamStats={awayTeamStats[0]?.stats}
        homeTeamStats={homeTeamStats[0]?.stats}
        showStats
      />
    );
    expect(getByText('Texans')).toBeInTheDocument();
    expect(getByText('@')).toBeInTheDocument();
    expect(getByText('Chiefs')).toBeInTheDocument();
    expect(getByText('KO:')).toBeInTheDocument();
    expect(getByText('Arrowhead Stadium, Kansas City, MO')).toBeInTheDocument();
    expect(getByText('Live on: NBC')).toBeInTheDocument();
  });

  test('renders FixtureCard as a fixture', () => {
    const showTimeOnly =
      gameFixtureData[0].games[0].schedule.playedStatus === 'UNPLAYED';

    const { getByText, queryByText } = renderWithRouter(
      <FixtureCard
        gameData={gameFixtureData[0].games[0]}
        isFixture
        showTimeOnly={showTimeOnly}
        awayTeamStats={awayTeamStats[0]?.stats}
        homeTeamStats={homeTeamStats[0]?.stats}
        showStats
      />
    );
    expect(getByText('Texans')).toBeInTheDocument();
    expect(getByText('@')).toBeInTheDocument();
    expect(getByText('Chiefs')).toBeInTheDocument();
    expect(getByText('KO:')).toBeInTheDocument();
    expect(getByText('Arrowhead Stadium, Kansas City, MO')).toBeInTheDocument();
    expect(getByText('Live on: NBC')).toBeInTheDocument();
    expect(
      queryByText('Read More', { type: 'button' })
    ).not.toBeInTheDocument();
  });

  test('renders FixtureCard as a result', () => {
    const showTimeOnly =
      gameResultsData[0].games[0].schedule.playedStatus === 'UNPLAYED';

    const { getByText, queryByText } = renderWithRouter(
      <FixtureCard
        gameData={gameResultsData[0].games[0]}
        isFixture
        showTimeOnly={showTimeOnly}
        awayTeamStats={awayTeamStats[0]?.stats}
        homeTeamStats={homeTeamStats[0]?.stats}
        showStats
      />
    );
    expect(getByText('Packers')).toBeInTheDocument();
    expect(getByText('14')).toBeInTheDocument();
    expect(getByText('@')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('Bears')).toBeInTheDocument();
    expect(queryByText('KO:')).not.toBeInTheDocument();
    expect(getByText('Soldier Field, Chicago, IL')).toBeInTheDocument();
    expect(getByText('Read more', { type: 'link' })).toBeInTheDocument();
  });
});
