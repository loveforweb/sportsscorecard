import './game-details.scss';

import { API_STALE_TIMEOUT, GET_GAME_DETAILS } from '../../api/api-calls';
import React, { useEffect, useReducer } from 'react';

import Container from 'react-bootstrap/Container';
import GameHeader from '../../components/GameHeader';
import GamePlayItem from '../../components/GamePlayItem';
import LoadingIcon from '../../components/LoadingIcon';
import Stadium from '../../components/Stadium';
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
          {data.scoring.quarters.map((quarter) => {
            return (
              <div className="quarter-section" key={quarter.quarterNumber}>
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
        </Container>
      </div>
    </>
  );
};

export default withRouter(GameDetails);
