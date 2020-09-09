import React from 'react';
import TeamCard from './TeamCard';
import data from '../../mock-data/standings-data';
import renderWithRouter from '../../testUtils';
import standingsReducer from '../../reducers/standings-reducer';

const state = standingsReducer([], {
  type: 'TEAM_NAMES',
  payload: {
    teams: data.teams,
  },
});

describe('TeamCard', () => {
  test('renders TeamCard for AFC', () => {
    const { getByText, container } = renderWithRouter(
      <TeamCard team={state[0].teams[0].team} />
    );
    expect(getByText('Baltimore')).toBeInTheDocument();
    expect(getByText('Ravens')).toBeInTheDocument();
    expect(getByText('BAL')).toBeInTheDocument();
    expect(container.querySelector('img')).toBeInTheDocument();
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://static.www.nfl.com/image/private/t_q-best/league/ucsdijmddsqcj1i9tddd.svg'
    );
    expect(getByText('Baltimore').closest('a')).toHaveAttribute(
      'href',
      '/team/BAL'
    );
  });

  test('renders TeamCard for NFC', () => {
    const { getByText, container } = renderWithRouter(
      <TeamCard team={state[1].teams[0].team} />
    );
    expect(getByText('Arizona')).toBeInTheDocument();
    expect(getByText('Cardinals')).toBeInTheDocument();
    expect(getByText('ARI')).toBeInTheDocument();
    expect(container.querySelector('img')).toBeInTheDocument();
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://static.www.nfl.com/image/private/t_q-best/league/u9fltoslqdsyao8cpm0k.svg'
    );
    expect(getByText('Arizona').closest('a')).toHaveAttribute(
      'href',
      '/team/ARI'
    );
  });
});
