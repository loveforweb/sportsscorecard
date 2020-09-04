import './PlayerImage.scss';

import PropTypes from 'prop-types';
import React from 'react';

const PlayerImage = ({ imageSrc, firstName, lastName }) => {
  return (
    <div className="component player-image">
      <img
        src={imageSrc ? imageSrc : '/assets/images/person-sil.png'}
        alt={`${firstName} ${lastName}`}
        loading="lazy"
      />
    </div>
  );
};

PlayerImage.propTypes = {
  imageSrc: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default PlayerImage;
