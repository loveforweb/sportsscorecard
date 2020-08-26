import React from 'react';
import './TeamCard.scss';
import PropTypes from 'prop-types';
import TeamName from '../TeamName';
import TeamBadge from '../TeamBadge';
import { Link } from 'react-router-dom';

const TeamCard = ({ team }) => {
  return (
    <Link
      to={{
        pathname: `team/${team.abbreviation}`,
        state: {
          id: team.id,
        },
      }}
    >
      <div
        className="component team-card"
        style={{
          backgroundColor: team.teamColoursHex[0],
        }}
      >
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
