import './TeamName.scss';

import PropTypes from 'prop-types';
import React from 'react';

const TeamName = ({ city, name, abbreviation, showAbbrOnly }) => {
  return (
    <div className={`team-name ${showAbbrOnly ? 'team-name--abbr-only' : ''}`}>
      {city ? (
        <>
          <span className="team-city">{city}</span>{' '}
        </>
      ) : null}
      <span className="team-nickname">{name}</span>
      <span className="team-abbr" aria-hidden="true">
        {abbreviation}
      </span>
    </div>
  );
};

TeamName.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string,
  abbreviation: PropTypes.string.isRequired,
  showAbbrOnly: PropTypes.bool,
};

export default TeamName;
