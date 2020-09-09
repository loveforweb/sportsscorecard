import React from 'react';
import TeamStats from './TeamStats';
import data from '../../mock-data/standings-data';
import renderWithRouter from '../../testUtils';
import standingsReducer from '../../reducers/standings-reducer';

const stateTeam = standingsReducer([], {
  type: 'TEAM_INFO',
  payload: {
    id: 'ARI',
    teams: data.teams,
  },
});

describe('TeamStats', () => {
  test('renders TeamStats', () => {
    const { getByText, getAllByText } = renderWithRouter(
      <TeamStats stats={stateTeam[0].stats} />
    );
    expect(getByText('Total 1st Downs')).toBeInTheDocument();
    expect(getByText('314')).toBeInTheDocument();
    expect(getByText('1st Downs Rush')).toBeInTheDocument();
    expect(getByText('109')).toBeInTheDocument();
    expect(getByText('1st Downs Pass')).toBeInTheDocument();
    expect(getByText('176')).toBeInTheDocument();
    expect(getByText('1st Downs Penalty')).toBeInTheDocument();
    expect(getByText('29')).toBeInTheDocument();
    expect(getByText('3RD DOWN CONVERSIONS')).toBeInTheDocument();
    expect(getByText('71 / 197')).toBeInTheDocument();
    expect(getByText('4TH DOWN CONVERSIONS')).toBeInTheDocument();
    expect(getByText('13 / 20')).toBeInTheDocument();
    expect(getByText('TOTAL OFFENSIVE YARDS')).toBeInTheDocument();
    expect(getByText('5467')).toBeInTheDocument();
    expect(getByText('Offense Plays')).toBeInTheDocument();
    expect(getByText('1000')).toBeInTheDocument();
    expect(getByText('Offense Average Yards')).toBeInTheDocument();
    expect(getByText('5.5')).toBeInTheDocument();
    expect(getByText('TOTAL RUSHING YARDS')).toBeInTheDocument();
    expect(getByText('1990')).toBeInTheDocument();
    expect(getByText('Plays')).toBeInTheDocument();
    expect(getByText('396')).toBeInTheDocument();
    expect(getByText('Average Yards')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('TOTAL PASSING YARDS')).toBeInTheDocument();
    expect(getByText('3797')).toBeInTheDocument();
    expect(getByText('Completions')).toBeInTheDocument();
    expect(getByText('355')).toBeInTheDocument();
    expect(getByText('Attemps')).toBeInTheDocument();
    expect(getByText('552')).toBeInTheDocument();
    expect(getByText('Interceptions')).toBeInTheDocument();
    expect(getByText('12')).toBeInTheDocument();
    expect(getByText('Average')).toBeInTheDocument();
    expect(getByText('6.9')).toBeInTheDocument();
    expect(getByText('SACKS')).toBeInTheDocument();
    expect(getByText('40')).toBeInTheDocument();
    expect(getByText('FIELD GOALS')).toBeInTheDocument();
    expect(getByText('31 / 35')).toBeInTheDocument();
    expect(getByText('TOUCHDOWNS')).toBeInTheDocument();
    expect(getByText('38')).toBeInTheDocument();
    expect(getByText('Rushing')).toBeInTheDocument();
    expect(getByText('18')).toBeInTheDocument();
    expect(getByText('Passing')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
    expect(getByText('Returns')).toBeInTheDocument();
    expect(getAllByText('0')).toHaveLength(2);
    expect(getByText('Defensive')).toBeInTheDocument();
  });
});
