import GameHeader from './GameHeader';
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

describe('GameHeader', () => {
  test('renders GameHeader', () => {
    const { getByText } = renderWithRouter(
      <GameHeader
        awayData={stateAwayTeam[0]}
        homeData={stateHomeTeam[0]}
        scores={data.scoring}
        venue={data.references.venueReferences[0]}
      />
    );
    expect(getByText('Los Angeles')).toBeInTheDocument();
    expect(getByText('Rams')).toBeInTheDocument();
    expect(getByText('LA')).toBeInTheDocument();
    expect(getByText('29')).toBeInTheDocument();
    expect(getByText('@')).toBeInTheDocument();
    expect(getByText('26')).toBeInTheDocument();
    expect(getByText('Carolina')).toBeInTheDocument();
    expect(getByText('Panthers')).toBeInTheDocument();
    expect(getByText('CAR')).toBeInTheDocument();
    expect(getByText(/stadium/i)).toBeInTheDocument();
    expect(
      getByText(/Bank of America Stadium, Charlotte, NC/)
    ).toBeInTheDocument();
  });
});
