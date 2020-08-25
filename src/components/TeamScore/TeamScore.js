import './TeamScore.scss';

import PropTypes from 'prop-types';
import React from 'react';

const TeamScore = ({ scoreTotal }) => {
  return (
    <div className="component team-score" aria-label="Team score">
      {scoreTotal}
    </div>
  );
};

TeamScore.propTypes = {
  scoreTotal: PropTypes.number.isRequired,
};

export default TeamScore;
