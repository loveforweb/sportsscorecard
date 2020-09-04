import './TeamCard.scss';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import TeamBadge from '../TeamBadge';
import TeamName from '../TeamName';

const TeamCard = ({ team }) => {
  return (
    <Link
      to={{
        pathname: `team/${team.abbreviation}`,
        state: {
          id: team.id,
        },
      }}
      className="component team-card"
      style={{
        backgroundColor: team.teamColoursHex[0],
      }}
    >
      <div className="team-card-wrapper">
        <TeamBadge badge={team.officialLogoImageSrc} />
        <TeamName
          city={team.city}
          name={team.name}
          abbreviation={team.abbreviation}
        />
      </div>
    </Link>
  );
};

TeamCard.propTypes = {
  team: PropTypes.shape({}).isRequired,
};

export default TeamCard;
