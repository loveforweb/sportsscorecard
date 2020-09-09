import React from 'react';
import TeamName from './TeamName';
import renderWithRouter from '../../testUtils';

const city = 'Los Angeles';
const name = 'Rams';
const abbreviation = 'LA';

describe('TeamName', () => {
  test('renders TeamName', () => {
    const { getByText } = renderWithRouter(
      <TeamName name={name} city={city} abbreviation={abbreviation} />
    );
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(city)).toBeInTheDocument();
    expect(getByText(name)).toBeInTheDocument();
  });

  test('renders TeamName with name and abbreviation only', () => {
    const { getByText, queryByText } = renderWithRouter(
      <TeamName name={name} abbreviation={abbreviation} />
    );
    expect(getByText(name)).toBeInTheDocument();
    expect(queryByText(city)).not.toBeInTheDocument();
    expect(getByText(name)).toBeInTheDocument();
  });

  test('renders TeamName and add abbreviation only class', () => {
    const { getByText, queryByText, container } = renderWithRouter(
      <TeamName
        name={name}
        city={city}
        abbreviation={abbreviation}
        showAbbrOnly
      />
    );
    expect(getByText(name)).toBeInTheDocument();
    expect(queryByText(city)).toBeInTheDocument();
    expect(getByText(name)).toBeInTheDocument();
    expect(
      container.firstChild.classList.contains('team-name--abbr-only')
    ).toBe(true);
  });
});
