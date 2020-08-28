import './PlayerCard.scss';

import PlayerImage from '../PlayerImage';
import PlayerStat from '../PlayerStat';
import PropTypes from 'prop-types';
import React from 'react';

const PlayerCard = ({ playerDetails }) => {
  return (
    <div className="component player-card">
      <div className="player-name">
        <div className="player-number">
          <PlayerStat
            title="#"
            value={playerDetails.player.jerseyNumber}
            ariaLabelTitle="Jersey number"
          />
        </div>
        {playerDetails.player.firstName} {playerDetails.player.lastName}
      </div>
      <div className="player-details">
        <div className="player-profile-image">
          <PlayerImage
            imageSrc={playerDetails.player.officialImageSrc}
            firstname={playerDetails.player.firstName}
            lastname={playerDetails.player.lastName}
          />
        </div>
        <div className="player-profile-quick-stats">
          <PlayerStat
            title="Pos"
            value={playerDetails.player.primaryPosition}
            ariaLabelTitle="Player position"
          />
          <PlayerStat
            title="Age"
            value={playerDetails.player.age}
            ariaLabelTitle="Player age"
          />
          <PlayerStat
            title="Height"
            value={playerDetails.player.height}
            ariaLabelTitle="Player height"
          />
          <PlayerStat
            title="Weight"
            value={playerDetails.player.weight}
            ariaLabelTitle="Player weight"
          />
        </div>
      </div>
    </div>
  );
};

PlayerCard.propTypes = {
  playerDetails: PropTypes.shape({}).isRequired,
};

export default PlayerCard;
