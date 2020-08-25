import './TeamName.scss';

import PropTypes from 'prop-types';
import React from 'react';

const TeamName = ({ city, name, abbreviation }) => {
  return (
    <div className="team-name">
      <span className="team-name-city">{city}</span>
      <span className="team-name-name">{name} </span>
      <span className="team-name-abbr" aria-hidden="true">
        {abbreviation}
      </span>
    </div>
  );
};

TeamName.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  abbreviation: PropTypes.string.isRequired,
};

export default TeamName;
