import './GameDateTime.scss';

import PropTypes from 'prop-types';
import React from 'react';

const GameDateTime = ({ time }) => {
  return (
    <div className="component game-date-time">
      <span className="game-time">
        Time: <time dateTime={time}>{time}</time>
      </span>
    </div>
  );
};

GameDateTime.propTypes = {
  time: PropTypes.string,
};

export default GameDateTime;
