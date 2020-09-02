import './PlayerStat.scss';

import PropTypes from 'prop-types';
import React from 'react';

const PlayerStat = ({ title, value, ariaLabelTitle }) => {
  return (
    <div className="component player-stat">
      <span className="stat-title" aria-label={ariaLabelTitle}>
        {title}
      </span>
      <span className="stat-value">
        {value ? value : '--'}
        {title === 'Weight' && value ? <span className="unit">lbs</span> : null}
      </span>
    </div>
  );
};

PlayerStat.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabelTitle: PropTypes.string.isRequired,
};

export default PlayerStat;
