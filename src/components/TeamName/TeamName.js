import './TeamName.scss';

import PropTypes from 'prop-types';
import React from 'react';

const TeamName = ({ city, name, abbreviation }) => {
  return (
    <div className="team-name">
      <span className="team-name-full">
        {city} {name}
      </span>
      <span className="team-name-abbr" aria-hidden="true">
        {abbreviation}
      </span>
    </div>
  );
};

TeamName.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string,
  abbreviation: PropTypes.string.isRequired,
};

export default TeamName;
