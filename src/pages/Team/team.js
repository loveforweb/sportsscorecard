import React from 'react';
import { withRouter } from 'react-router-dom';
import TeamBadge from '../../components/TeamBadge';
import TeamName from '../../components/TeamName';
import { teamNames } from '../../mock-data/standings';
import Container from 'react-bootstrap/Container';
import './team.scss';

const Team = ({ location }) => {
  const { id } = location.state;

  const filterTeams = teamNames.map((conf) => {
    return conf.teams.filter((theTeam) => {
      return theTeam.id === id;
    });
  });

  const { team, stats, divisionRank } = [].concat(...filterTeams)[0];

  return (
    <div className="team-page">
      <div
        className="header-banner"
        style={{
          backgroundColor: team.teamColoursHex[0],
        }}
      >
        <Container>
          <TeamBadge badge={team.officialLogoImageSrc} />
          <div className="team-details">
            <h1>
              <TeamName
                city={team.city}
                name={team.name}
                abbreviation={team.abbreviation}
              />
            </h1>
            ({stats.standings.wins} - {stats.standings.losses} -{' '}
            {stats.standings.ties}) | {divisionRank.divisionName}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default withRouter(Team);
