import './game-lineup.scss';

import {
  API_STALE_TIMEOUT,
  GET_GAME_DETAILS,
  GET_GAME_LINEUP,
} from '../../api/api-calls';
import React, { useEffect, useReducer } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import GameHeader from '../../components/GameHeader';
import LoadingIcon from '../../components/LoadingIcon';
import MessagePanel from '../../components/MessagePanel';
import PlayerCard from '../../components/PlayerCard';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import gameReducer from '../../reducers/game-reducer';
import playersReducer from '../../reducers/players-reducer';
import { useQuery } from 'react-query';
import { withRouter } from 'react-router-dom';

const GameLineup = ({ match, location }) => {
  const [stateAwayTeam, dispatchAwayTeam] = useReducer(gameReducer, []);
  const [stateHomeTeam, dispatchHomeTeam] = useReducer(gameReducer, []);
  const [stateHomePlayers, dispatchHomePlayers] = useReducer(
    playersReducer,
    []
  );
  const [stateAwayPlayers, dispatchAwayPlayers] = useReducer(
    playersReducer,
    []
  );
  const { gameLineup } = match.params;

  const { isLoading, error, data } = useQuery(
    ['gameLineup', { id: gameLineup }],
    GET_GAME_LINEUP,
    {
      staleTime: API_STALE_TIMEOUT,
    }
  );

  const { isLoading: isLoadingGD, error: errorGD, data: dataGD } = useQuery(
    ['gameDetails', { id: gameLineup }],
    GET_GAME_DETAILS,
    {
      staleTime: API_STALE_TIMEOUT,
    }
  );

  useEffect(() => {
    if (data) {
      dispatchAwayTeam({
        type: 'AWAY_TEAM',
        payload: data,
      });

      dispatchHomeTeam({
        type: 'HOME_TEAM',
        payload: data,
      });
    }
  }, [data]);

  useEffect(() => {
    if (stateHomeTeam.length) {
      const theHomeTeam = data.teamLineups.filter((theTeam) => {
        return theTeam.team.id === stateHomeTeam[0].id;
      });

      if (theHomeTeam[0].expected) {
        dispatchHomePlayers({
          type: 'TEAM',
          payload: { players: theHomeTeam[0].expected.lineupPositions },
        });
      }
    }
  }, [stateHomeTeam, data]);

  useEffect(() => {
    if (stateAwayTeam.length) {
      const theAwayTeam = data.teamLineups.filter((theTeam) => {
        return theTeam.team.id === stateAwayTeam[0].id;
      });

      if (theAwayTeam[0].expected) {
        dispatchAwayPlayers({
          type: 'TEAM',
          payload: { players: theAwayTeam[0].expected.lineupPositions },
        });
      }
    }
  }, [stateAwayTeam, data]);

  if (error || errorGD) {
    return (
      <MessagePanel messageType="error" message="Unable to load game details" />
    );
  }

  if (isLoading || isLoadingGD) {
    return <LoadingIcon />;
  }

  if (stateAwayTeam.length === 0 || stateHomeTeam.length === 0) {
    return <LoadingIcon />;
  }

  const playerRefs = data.references.playerReferences;

  const matchPlayerWithRef = (player) => {
    return playerRefs.find((item) => {
      return item.id === player.player.id;
    });
  };

  return (
    <>
      <header>
        <GameHeader
          awayData={stateAwayTeam[0]}
          homeData={stateHomeTeam[0]}
          scores={dataGD?.scoring}
          venue={data.references.venueReferences[0]}
          toBePlayed={data.game.playedStatus === 'UNPLAYED'}
          startTime={data.game.startTime}
        />
      </header>
      <Container>
        <Tabs defaultActiveKey="offense" id="game-lineup-tabs">
          <Tab eventKey="offense" title="Offense">
            <Row>
              <Col>
                <h2>Offence</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>{stateAwayTeam[0].name}</h3>
                {stateAwayPlayers.offense?.length > 0 ? (
                  stateAwayPlayers.offense.map((player) => {
                    if (player.player) {
                      const thePlayer = matchPlayerWithRef(player);
                      const playerDetails = {
                        player: {
                          ...thePlayer,
                        },
                      };

                      return thePlayer ? (
                        <PlayerCard
                          key={playerDetails.player.id}
                          playerDetails={playerDetails}
                          teamBadge={stateAwayTeam[0].officialLogoImageSrc}
                        />
                      ) : null;
                    }
                    return player;
                  })
                ) : (
                  <MessagePanel
                    messageType="no-lineup"
                    message="Line up not yet available"
                  />
                )}
              </Col>
              <Col>
                <h3>{stateHomeTeam[0].name}</h3>
                {stateHomePlayers.offense?.length > 0 ? (
                  stateHomePlayers.offense.map((player) => {
                    if (player.player) {
                      const thePlayer = matchPlayerWithRef(player);
                      const playerDetails = {
                        player: {
                          ...thePlayer,
                        },
                      };

                      return thePlayer ? (
                        <PlayerCard
                          key={playerDetails.player.id}
                          playerDetails={playerDetails}
                          teamBadge={stateHomeTeam[0].officialLogoImageSrc}
                        />
                      ) : null;
                    }
                    return player;
                  })
                ) : (
                  <MessagePanel
                    messageType="no-lineup"
                    message="Line up not yet available"
                  />
                )}
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="defense" title="Defense">
            <Row>
              <Col>
                <h2>Defense</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>{stateAwayTeam[0].name}</h3>
                {stateAwayPlayers.defense?.length > 0 ? (
                  stateAwayPlayers.defense.map((player) => {
                    if (player.player) {
                      const thePlayer = matchPlayerWithRef(player);
                      const playerDetails = {
                        player: {
                          ...thePlayer,
                        },
                      };

                      return thePlayer ? (
                        <PlayerCard
                          key={playerDetails.player.id}
                          playerDetails={playerDetails}
                          teamBadge={stateAwayTeam[0].officialLogoImageSrc}
                        />
                      ) : null;
                    }
                    return player;
                  })
                ) : (
                  <MessagePanel
                    messageType="no-lineup"
                    message="Line up not yet available"
                  />
                )}
              </Col>
              <Col>
                <h3>{stateHomeTeam[0].name}</h3>
                {stateHomePlayers.defense?.length > 0 ? (
                  stateHomePlayers.defense.map((player) => {
                    if (player.player) {
                      const thePlayer = matchPlayerWithRef(player);
                      const playerDetails = {
                        player: {
                          ...thePlayer,
                        },
                      };

                      return thePlayer ? (
                        <PlayerCard
                          key={playerDetails.player.id}
                          playerDetails={playerDetails}
                          teamBadge={stateHomeTeam[0].officialLogoImageSrc}
                        />
                      ) : null;
                    }
                    return player;
                  })
                ) : (
                  <MessagePanel
                    messageType="no-lineup"
                    message="Line up not yet available"
                  />
                )}
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default withRouter(GameLineup);
