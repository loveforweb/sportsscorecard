import './team.scss';

import { API_STALE_TIMEOUT, GET_VENUE } from '../../api/api-calls';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FixtureCard from '../../components/FixtureCard';
import LoadingIcon from '../../components/LoadingIcon';
import PlayerCard from '../../components/PlayerCard';
import React from 'react';
import Row from 'react-bootstrap/Row';
import SocialMedia from '../../components/SocialMedia';
import StadiumMap from '../../components/StadiumMap';
import StandingsTable from '../../components/StandingsTable';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TeamBadge from '../../components/TeamBadge';
import TeamName from '../../components/TeamName';
import TeamStats from '../../components/TeamStats';
import playersData from '../../mock-data/players';
import { standingsData } from '../../mock-data/standings';
import { teamFixtures } from '../../mock-data/team-fixtures';
import { teamNames } from '../../mock-data/standings';
import { teamResults } from '../../mock-data/team-results';
import { useQuery } from 'react-query';
import { withRouter } from 'react-router-dom';

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
    ['venues', { id }],
    GET_VENUE,
    {
      staleTime: API_STALE_TIMEOUT,
    }
  );

  const tableResults = standingsData.map((conf) => {
    return conf.tables.filter((table) => {
      return table.division === divisionRank.divisionName;
    });
  });

  const divisionTable = [].concat(...tableResults);

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
        <Tabs defaultActiveKey="info" id="uncontrolled-tab-example">
          <Tab eventKey="info" title="Info">
            <Row>
              <Col xs={12} md={6}>
                <h2>Upcoming fixtures</h2>
                {teamFixtures.map((fixture, i) => {
                  if (i < 3) {
                    return (
                      <FixtureCard
                        gameData={fixture}
                        isFixture
                        showDateAndTime
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
                    return (
                      <FixtureCard
                        gameData={result}
                        key={i}
                        showAbbr
                        showDateOnly
                      />
                    );
                  }
                  return false;
                })}
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h2>Division Standings</h2>
                {divisionTable.map((table, i) => {
                  return (
                    <StandingsTable {...table} key={`${i}-key`} teamId={id} />
                  );
                })}
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                {error ? <div>Unable to load</div> : null}
                {isLoading ? <LoadingIcon /> : null}

                {venueData ? (
                  <>
                    <h2>Stadium</h2>
                    {/* <StadiumMap
                      geoLocation={venueData.venues[0].venue.geoCoordinates}
                      color={team.teamColoursHex[0]}
                      stadiumName={`${venueData.venues[0].venue.name}, ${venueData.venues[0].venue.city}`}
                    /> */}
                    <address>
                      Stadium: {venueData.venues[0].venue.name},{' '}
                      {venueData.venues[0].venue.city}.<br />
                    </address>
                    <div className="stadium-capacity">
                      Capacity:{' '}
                      {
                        venueData.venues[0].venue.capacitiesByEventType[0]
                          .capacity
                      }
                    </div>
                  </>
                ) : null}
              </Col>
              <Col xs={12} md={6}>
                <h2>Social Media</h2>
                <SocialMedia socialAccounts={team.socialMediaAccounts} />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="players" title="Players">
            <Row>
              <Col xs={12}>
                <h2>Offense</h2>
              </Col>
              {playersData?.offense?.map((details) => {
                return (
                  <Col xs={12} md={6} lg={4} key={details.player.id}>
                    <PlayerCard playerDetails={details} />
                  </Col>
                );
              })}
            </Row>
            <Row>
              <Col xs={12}>
                <h2>Defense</h2>
              </Col>
              {playersData?.defense?.map((details) => {
                return (
                  <Col xs={12} md={6} lg={4} key={details.player.id}>
                    <PlayerCard playerDetails={details} />
                  </Col>
                );
              })}
            </Row>
          </Tab>
          <Tab eventKey="stats" title="Stats">
            <Row>
              <Col xs={12}>
                <h2>Stats</h2>
                <TeamStats stats={stats} />
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default withRouter(Team);
