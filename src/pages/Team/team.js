import React from 'react';
import { withRouter } from 'react-router-dom';
import TeamBadge from '../../components/TeamBadge';
import TeamName from '../../components/TeamName';
import { teamNames } from '../../mock-data/standings';
import Container from 'react-bootstrap/Container';
import './team.scss';
// import venueData from '../../mock-data/venue-data';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import StadiumMap from '../../components/StadiumMap/StadiumMap';
import { teamFixtures } from '../../mock-data/team-fixtures';
import { teamResults } from '../../mock-data/team-results';
import FixtureCard from '../../components/FixtureCard';
import TeamStats from '../../components/TeamStats';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GET_VENUE, API_STALE_TIMEOUT } from '../../api/api-calls';
import { useQuery } from 'react-query';
import LoadingIcon from '../../components/LoadingIcon/LoadingIcon';

const rankSup = (rank) => {
  switch (rank) {
    case 1:
      return 'st';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const Team = ({ location }) => {
  const { id } = location.state;

  const filterTeams = teamNames.map((conf) => {
    return conf.teams.filter((theTeam) => {
      return theTeam.team.id === id;
    });
  });

  const { team, stats, divisionRank } = [].concat(...filterTeams)[0];

  const { isLoading, data: venueData, error } = useQuery(
    ['todos', { id }],
    GET_VENUE,
    {
      staleTime: API_STALE_TIMEOUT,
    }
  );

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
            <h1 className="team-name">
              <TeamName
                city={team.city}
                name={team.name}
                abbreviation={team.abbreviation}
              />
            </h1>
          </div>
          <div className="simple-stats">
            {divisionRank.rank}
            {rankSup(divisionRank.rank)} - {divisionRank.divisionName} |{' '}
            {stats.standings.wins} - {stats.standings.losses} -{' '}
            {stats.standings.ties}
          </div>
        </Container>
      </div>

      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h2>Upcoming fixtures</h2>
            {teamFixtures.map((fixture, i) => {
              if (i < 3) {
                return (
                  <FixtureCard
                    gameData={fixture}
                    isFixture
                    showDate
                    key={i}
                    showAbbr
                  />
                );
              }
              return false;
            })}
          </Col>
          <Col xs={12} md={6}>
            <h2>Last 3 Results</h2>
            {teamResults.map((result, i) => {
              if (i < 3) {
                return <FixtureCard gameData={result} key={i} showAbbr />;
              }
              return false;
            })}
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <h2>Stats</h2>
            <TeamStats stats={stats} />
          </Col>
          <Col xs={12} md={6}>
            {error ? <div>Unable to load</div> : null}
            {isLoading ? <LoadingIcon /> : null}

            {venueData ? (
              <>
                <h2>Stadium</h2>
                <StadiumMap
                  geoLocation={venueData.venues[0].venue.geoCoordinates}
                  color={team.teamColoursHex[0]}
                  stadiumName={`${venueData.venues[0].venue.name}, ${venueData.venues[0].venue.city}`}
                />
                <address>
                  Stadium: {venueData.venues[0].venue.name},{' '}
                  {venueData.venues[0].venue.city}.<br />
                </address>
                <div className="stadium-capacity">
                  Capacity:{' '}
                  {venueData.venues[0].venue.capacitiesByEventType[0].capacity}
                </div>
              </>
            ) : null}

            <h2>Social Media</h2>
            <SocialMedia socialAccounts={team.socialMediaAccounts} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Team);
