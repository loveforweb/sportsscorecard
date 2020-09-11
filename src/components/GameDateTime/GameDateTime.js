import './GameDateTime.scss';

import PropTypes from 'prop-types';
import React from 'react';

const formatTime = (startTime) => {
  return new Date(startTime).toLocaleTimeString('en-GB', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const formatDate = (startTime) => {
  return new Date(startTime).toLocaleDateString('en-GB', {
    timeZone: 'UTC',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const GameDateTime = ({ startTime, showDate, showTime, isFixture }) => {
  return (
    <div className="component game-date-time">
      <span className="game-time">
        {showTime ? (
          <>
            KO: <time dateTime={startTime}>{formatTime(startTime)} GMT</time>
          </>
        ) : null}
        {showTime && showDate && ` - `}
        {!isFixture ? 'Played: ' : null}
        {showDate ? (
          <time dateTime={startTime}>{formatDate(startTime)}</time>
        ) : null}
      </span>
    </div>
  );
};

GameDateTime.propTypes = {
  startTime: PropTypes.string.isRequired,
  showDate: PropTypes.bool,
  showTime: PropTypes.bool,
  isFixture: PropTypes.bool,
};

export default GameDateTime;
