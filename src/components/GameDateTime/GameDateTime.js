import './GameDateTime.scss';

import PropTypes from 'prop-types';
import React from 'react';

const GameDateTime = ({ time, date, isFixture }) => {
  return (
    <div className="component game-date-time">
      <span className="game-time">
        {time ? (
          <>
            KO: <time dateTime={time}>{time} GMT</time>
          </>
        ) : null}
        {time && date && ` - `}
        {!isFixture ? 'Played: ' : null}
        {date ? <time dateTime={date}>{date}</time> : null}
      </span>
    </div>
  );
};

GameDateTime.propTypes = {
  time: PropTypes.string,
  date: PropTypes.string,
  isFixture: PropTypes.bool,
};

export default GameDateTime;
