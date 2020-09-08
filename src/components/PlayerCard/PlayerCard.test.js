import PlayerCard from './PlayerCard';
import React from 'react';
import playersData from '../../mock-data/players-data';
import playersReducer from '../../reducers/players-reducer';
import renderWithRouter from '../../testUtils';

const statePlayer = playersReducer(
  {
    offense: [],
    defense: [],
  },
  {
    type: 'TEAM',
    payload: {
      players: playersData.players,
    },
  }
);

describe('PlayerCard', () => {
  test('renders PlayerCard from offence', () => {
    const { getByText, getByAltText } = renderWithRouter(
      <PlayerCard playerDetails={statePlayer.offense[3]} />
    );
    expect(getByText('#')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText(/C.J. Beathard/)).toBeInTheDocument();
    expect(getByAltText('C.J. Beathard')).toBeInTheDocument();
    expect(getByText('Pos')).toBeInTheDocument();
    expect(getByText('QB')).toBeInTheDocument();
    expect(getByText('Age')).toBeInTheDocument();
    expect(getByText('26')).toBeInTheDocument();
    expect(getByText('Height')).toBeInTheDocument();
    expect(getByText(/6'2"/)).toBeInTheDocument();
    expect(getByText('Weight')).toBeInTheDocument();
    expect(getByText('215')).toBeInTheDocument();
    expect(getByText('lbs')).toBeInTheDocument();
  });
  test('renders PlayerCard from defense', () => {
    const { getByText, getByAltText } = renderWithRouter(
      <PlayerCard playerDetails={statePlayer.defense[3]} />
    );
    expect(getByText('#')).toBeInTheDocument();
    expect(getByText('50')).toBeInTheDocument();
    expect(getByText('Joey Alfieri')).toBeInTheDocument();
    expect(getByAltText('Joey Alfieri')).toBeInTheDocument();
    expect(getByText('Pos')).toBeInTheDocument();
    expect(getByText('LB')).toBeInTheDocument();
    expect(getByText('Age')).toBeInTheDocument();
    expect(getByText('24')).toBeInTheDocument();
    expect(getByText('Height')).toBeInTheDocument();
    expect(getByText(/6'2"/)).toBeInTheDocument();
    expect(getByText('Weight')).toBeInTheDocument();
    expect(getByText('226')).toBeInTheDocument();
    expect(getByText('lbs')).toBeInTheDocument();
  });
});
