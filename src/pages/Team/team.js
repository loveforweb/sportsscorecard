import './team.scss';

import {
  API_STALE_TIMEOUT,
  GET_PLAYERS,
  GET_STANDINGS,
  GET_TEAM_FIXTURES,
  GET_VENUE,
} from '../../api/api-calls';
import React, { useEffect, useReducer } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FixtureCard from '../../components/FixtureCard';
import LoadingIcon from '../../components/LoadingIcon';
import PlayerCard from '../../components/PlayerCard';
import Row from 'react-bootstrap/Row';
import SocialMedia from '../../components/SocialMedia';
import StadiumMap from '../../components/StadiumMap';
import StandingsTable from '../../components/StandingsTable';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TeamBadge from '../../components/TeamBadge';
import TeamName from '../../components/TeamName';
import TeamStats from '../../components/TeamStats';
import fixturesReducer from '../../reducers/fixtures-reducer';
import playersReducer from '../../reducers/players-reducer';
import standingsReducer from '../../reducers/standings-reducer';
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

const Team = ({ match, location }) => {
  const { abbr } = match.params;
  const [stateTeam, dispatchTeam] = useReducer(standingsReducer, {});
  const [stateStandings, dispatchStandings] = useReducer(standingsReducer, {
    division: 'AFC North',
    teams: [],
  });
  const [stateFixtures, dispatchFixtures] = useReducer(fixturesReducer, {
    completedGames: [],
    unplayedGames: [],
  });
  const [statePlayers, dispatchPlayers] = useReducer(playersReducer, {
    offense: [],
    defense: [],
  });

  const {
    isLoading: isLoadingStandings,
    data: standingsData,
    error: errorStandings,
  } = useQuery('standings', GET_STANDINGS, {
    staleTime: API_STALE_TIMEOUT,
  });

  const {
    isLoading: isLoadingFixtures,
    data: fixturesData,
    error: errorFixtures,
  } = useQuery(['fixtures', { team: abbr }], GET_TEAM_FIXTURES, {
    staleTime: API_STALE_TIMEOUT,
  });

  const {
    isLoading: isLoadingVenue,
    data: venueData,
    error: errorVenue,
  } = useQuery(['venues', { team: abbr }], GET_VENUE, {
    staleTime: API_STALE_TIMEOUT,
  });

  const {
    isLoading: isLoadingPlayers,
    data: playersData,
    error: errorPlayers,
  } = useQuery(['players', { team: abbr }], GET_PLAYERS, {
    staleTime: API_STALE_TIMEOUT,
  });

  useEffect(() => {
    if (standingsData) {
      dispatchStandings({
        type: 'CONF',
        payload: {
          id: abbr,
          teams: standingsData.teams,
        },
      });

      dispatchTeam({
        type: 'TEAM_INFO',
        payload: {
          id: abbr,
          teams: standingsData.teams,
        },
      });
    }
  }, [standingsData, abbr]);

  useEffect(() => {
    if (fixturesData) {
      dispatchFixtures({
        type: 'TEAM_FIXTURE',
        payload: {
          id: abbr,
          fixtures: fixturesData,
        },
      });
    }
  }, [fixturesData, abbr]);

  useEffect(() => {
    if (playersData) {
      dispatchPlayers({
        type: 'TEAM',
        payload: {
          id: abbr,
          players: playersData.players,
        },
      });
    }
  }, [playersData, abbr]);

  return (
    <div className="team-page">
      <div
        className="header-banner"
        style={{
          backgroundColor:
            stateTeam.length > 0 ? stateTeam[0].team.teamColoursHex[0] : null,
        }}
      >
        <Container>
          {stateTeam.length > 0 ? (
            <TeamBadge badge={stateTeam[0].team.officialLogoImageSrc} />
          ) : null}

          <div className="team-details">
            {errorStandings ? <div>Error loading Standings</div> : null}
            {isLoadingStandings ? <LoadingIcon /> : null}
            {stateTeam.length > 0 ? (
              <h1 className="team-name">
                <TeamName
                  city={stateTeam[0].team.city || null}
                  name={stateTeam[0].team.name || null}
                  abbreviation={stateTeam[0].team.abbreviation || null}
                />
              </h1>
            ) : null}
          </div>
          <div className="simple-stats">
            {errorStandings ? <div>Error loading Standings</div> : null}
            {stateTeam.length > 0 ? (
              <>
                {stateTeam[0].divisionRank.rank}
                {rankSup(stateTeam[0].divisionRank.rank)} -{' '}
                {stateTeam[0].divisionRank.divisionName} |{' '}
                {stateTeam[0].stats.standings.wins} -{' '}
                {stateTeam[0].stats.standings.losses} -{' '}
                {stateTeam[0].stats.standings.ties}
              </>
            ) : null}
          </div>
        </Container>
      </div>

      <Container>
        <Tabs defaultActiveKey="info" id="uncontrolled-tab-example">
          <Tab eventKey="info" title="Info">
            <Row>
              <Col xs={12} md={6}>
                <h2>Upcoming fixtures</h2>
                {errorFixtures ? (
                  <div>Unable to load upcoming fixtures</div>
                ) : null}
                {isLoadingFixtures ? <LoadingIcon /> : null}
                {stateFixtures.unplayedGames.length > 0
                  ? stateFixtures.unplayedGames.map((fixture, i) => {
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
                    })
                  : 'No Upcoming Games'}
              </Col>
              <Col xs={12} md={6}>
                <h2>Last 3 Results</h2>
                {errorFixtures ? (
                  <div>Unable to load last 3 results</div>
                ) : null}
                {isLoadingFixtures ? <LoadingIcon /> : null}
                {stateFixtures.completedGames.length > 0
                  ? stateFixtures.completedGames.map((fixture, i) => {
                      if (i < 3) {
                        return (
                          <FixtureCard
                            gameData={fixture}
                            key={i}
                            showAbbr
                            showDateOnly
                          />
                        );
                      }
                      return false;
                    })
                  : 'No results just yet'}
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h2>Division Standings</h2>
                {stateStandings.teams.length > 0 ? (
                  <StandingsTable {...stateStandings} teamId={abbr} />
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                {errorVenue ? <div>Unable to load</div> : null}
                {isLoadingVenue ? <LoadingIcon /> : null}

                {venueData && stateTeam.length > 0 ? (
                  <>
                    <h2>Stadium</h2>
                    <StadiumMap
                      geoLocation={venueData.venues[0].venue.geoCoordinates}
                      color={stateTeam[0].team.teamColoursHex[0]}
                      stadiumName={`${venueData.venues[0].venue.name}, ${venueData.venues[0].venue.city}`}
                    />
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
                {stateTeam.length > 0 ? (
                  <SocialMedia
                    socialAccounts={stateTeam[0].team.socialMediaAccounts}
                  />
                ) : null}
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="players" title="Players">
            <Row>
              <Col xs={12}>
                <h2>Offense</h2>
              </Col>
              {errorPlayers ? <div>Unable to load</div> : null}
              {isLoadingPlayers ? <LoadingIcon /> : null}
              {statePlayers.offense?.map((details) => {
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
              {statePlayers.defense?.map((details) => {
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
                {errorStandings ? <div>Error loading Standings</div> : null}
                {isLoadingStandings ? <LoadingIcon /> : null}
                {stateTeam.length > 0 ? (
                  <TeamStats stats={stateTeam[0].stats} />
                ) : null}
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default withRouter(Team);
