import GamePlayItem from './GamePlayItem';
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

const play = data.scoring.quarters[1].scoringPlays[0];

describe('GamePlayItem', () => {
  test('renders GamePlayItem', () => {
    const { getByText } = renderWithRouter(
      <GamePlayItem
        {...play}
        teamHome={stateHomeTeam[0]}
        teamAway={stateAwayTeam[0]}
      />
    );
    expect(getByText('LA')).toBeInTheDocument();
    expect(getByText('FIELD GOAL')).toBeInTheDocument();
    expect(
      getByText(
        '(13:48) 4-G.Zuerlein 49 yard field goal is GOOD, Center-44-J.McQuaide, Holder-6-J.Hekker.'
      )
    ).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
  });
});
