import './TeamBadge.scss';

import PropTypes from 'prop-types';
import React from 'react';

const TeamBadge = ({ badge }) => {
  return (
    <div className="component team-badge" aria-hidden="true">
      <img src={`${badge}.svg`} loading="lazy" alt="" />
    </div>
  );
};

TeamBadge.propTypes = {
  badge: PropTypes.string.isRequired,
};

export default TeamBadge;
