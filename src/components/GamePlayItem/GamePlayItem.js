import './GamePlayItem.scss';

import PropTypes from 'prop-types';
import React from 'react';

const scoreType = (point) => {
  let type = '';
  switch (point) {
    case 6:
      type = 'TOUCHDOWN';
      break;
    case 3:
      type = 'FIELD GOAL';
      break;
    case 1:
      type = 'CONVERSION';
      break;
    case 2:
      type = '2pt CONVERSION';
      break;

    default:
      break;
  }

  return type;
};

const GamePlayItem = ({
  playDescription,
  scoreChange,
  team,
  teamHome,
  teamAway,
}) => {
  return (
    <div className="component game-play-item">
      <h3>{team.abbreviation === teamHome ? teamHome : teamAway}</h3>
      <div
        className={`is--${scoreType(scoreChange)
          .toLowerCase()
          .replace(/ /g, '-')}`}
      >
        {scoreType(scoreChange)}
        <br />
        Scoring Play: {playDescription}
      </div>
    </div>
  );
};

GamePlayItem.propTypes = {
  //
};

export default GamePlayItem;
