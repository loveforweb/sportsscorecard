import React from 'react';
import './TeamCard.scss';
import PropTypes from 'prop-types';
import TeamName from '../TeamName';
import TeamBadge from '../TeamBadge';

const TeamCard = ({ city, name, abbreviation, badge }) => {
  return (
    <div className="component TeamCard">
      <TeamName city={city} name={name} abbreviation={abbreviation} />
      <TeamBadge badge={badge} />
    </div>
  );
};

TeamCard.propTypes = {
  city: PropTypes.string,
  name: PropTypes.string.isRequired,
  abbreviation: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
};

export default TeamCard;
