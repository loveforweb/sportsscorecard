import './game-details.scss';

import { API_STALE_TIMEOUT, GET_GAME_DETAILS } from '../../api/api-calls';
import React, { useEffect, useReducer } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import GameHeader from '../../components/GameHeader';
import GamePlayItem from '../../components/GamePlayItem';
import GameStats from '../../components/GameStats/GameStats';
import LoadingIcon from '../../components/LoadingIcon';
import Row from 'react-bootstrap/Row';
import Stadium from '../../components/Stadium';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import data from '../../mock-data/box-score';
import gameReducer from '../../reducers/game-reducer';
import { useQuery } from 'react-query';
import { withRouter } from 'react-router-dom';

const rankSup = (rank) => {
  switch (rank) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const GameDetails = ({ match, location }) => {
  const [stateAwayTeam, dispatchAwayTeam] = useReducer(gameReducer, []);
  const [stateHomeTeam, dispatchHomeTeam] = useReducer(gameReducer, []);
  const { gameDetails } = match.params;

  // const { isLoading, error, data } = useQuery(
  //   ['gameDetails', { id: gameDetails }],
  //   GET_GAME_DETAILS,
  //   {
  //     staleTime: API_STALE_TIMEOUT,
  //   }
  // );

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

  if (stateAwayTeam.length === 0 || stateHomeTeam.length === 0) {
    return <LoadingIcon />;
  }
  console.log(data);

  return (
    <>
      {/* {error ? <div>Unable to load game details</div> : null}
      {isLoading ? <LoadingIcon /> : null} */}
      <div className="game-details-page">
        <header>
          <GameHeader
            awayData={stateAwayTeam[0]}
            homeData={stateHomeTeam[0]}
            scores={data.scoring}
            venue={data.references.venueReferences[0]}
          />
        </header>
        <Container>
          <h2>Game details</h2>
          <Tabs defaultActiveKey="scoringDrive" id="game-details-tabs">
            <Tab eventKey="scoringDrive" title="Scoring Drive">
              <Row>
                <Col>
                  {data.scoring.quarters.map((quarter) => {
                    return (
                      <div
                        className="quarter-section"
                        key={quarter.quarterNumber}
                      >
                        <h3 className="quarter-heading">
                          {quarter.quarterNumber}
                          {rankSup(quarter.quarterNumber)} Quarter
                        </h3>
                        <div>
                          {quarter.scoringPlays.length === 0 && (
                            <div className="no-score-panel">No scores</div>
                          )}
                          {quarter.scoringPlays.map((play, i) => {
                            return (
                              <GamePlayItem
                                key={`${i}-${play.quarterSecondsElapsed}`}
                                {...play}
                                teamHome={stateHomeTeam[0]}
                                teamAway={stateAwayTeam[0]}
                              />
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="stats" title="Stats">
              <GameStats
                homeTeam={data.stats.home.teamStats[0]}
                awayTeam={data.stats.away.teamStats[0]}
              />
            </Tab>
          </Tabs>
        </Container>
      </div>
    </>
  );
};

export default withRouter(GameDetails);
