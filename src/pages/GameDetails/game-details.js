import './game-details.scss';

import { API_STALE_TIMEOUT, GET_GAME_DETAILS } from '../../api/api-calls';
import React, { useEffect, useReducer } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import GameHeader from '../../components/GameHeader';
import GamePlayItem from '../../components/GamePlayItem';
import GameStats from '../../components/GameStats';
import LoadingIcon from '../../components/LoadingIcon';
import MessagePanel from '../../components/MessagePanel';
import QuarterHeading from '../../components/QuarterHeading';
import QuarterSection from '../../components/QuarterSection';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import gameReducer from '../../reducers/game-reducer';
import { useQuery } from 'react-query';
import { withRouter } from 'react-router-dom';

const GameDetails = ({ match, location }) => {
  const [stateAwayTeam, dispatchAwayTeam] = useReducer(gameReducer, []);
  const [stateHomeTeam, dispatchHomeTeam] = useReducer(gameReducer, []);
  const { gameDetails } = match.params;

  const { isLoading, error, data } = useQuery(
    ['gameDetails', { id: gameDetails }],
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

  if (stateAwayTeam.length === 0 || stateHomeTeam.length === 0) {
    return <LoadingIcon />;
  }

  return (
    <>
      {error ? <div>Unable to load game details</div> : null}
      {isLoading ? <LoadingIcon /> : null}
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
                      <QuarterSection key={quarter.quarterNumber}>
                        <QuarterHeading quarterNumber={quarter.quarterNumber} />
                        {quarter.scoringPlays.length === 0 ? (
                          <MessagePanel
                            messageType="no-score"
                            message="No scores"
                          />
                        ) : null}

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
                      </QuarterSection>
                    );
                  })}
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="stats" title="Stats">
              <GameStats
                homeTeamAbbr={stateHomeTeam[0].abbreviation}
                awayTeamAbbr={stateAwayTeam[0].abbreviation}
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
