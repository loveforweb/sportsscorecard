import React, { useEffect, useReducer } from 'react';

import Container from 'react-bootstrap/Container';
import GameDateTime from '../../components/GameDateTime';
import GameHeader from '../../components/GameHeader';
import LoadingIcon from '../../components/LoadingIcon';
import Stadium from '../../components/Stadium';
import data from '../../mock-data/box-score';
import gameReducer from '../../reducers/game-reducer';

const GameDetails = () => {
  const [stateAwayTeam, dispatchAwayTeam] = useReducer(gameReducer, []);
  const [stateHomeTeam, dispatchHomeTeam] = useReducer(gameReducer, []);

  useEffect(() => {
    dispatchAwayTeam({
      type: 'AWAY_TEAM',
      payload: data,
    });

    dispatchHomeTeam({
      type: 'HOME_TEAM',
      payload: data,
    });
  }, []);

  if (stateAwayTeam.length === 0 || stateHomeTeam.length === 0) {
    return <LoadingIcon />;
  }

  return (
    <>
      <header>
        <GameHeader
          awayData={stateAwayTeam[0]}
          homeData={stateHomeTeam[0]}
          scores={data.scoring}
        />
      </header>
      <Container>{/* <h2>Game details</h2> */}</Container>
    </>
  );
};

export default GameDetails;
