import './PlayerImage.scss';

import PropTypes from 'prop-types';
import React from 'react';

const PlayerImage = ({ imageSrc, firstName, lastname }) => {
  return (
    <div className="component player-image">
      <img
        src={imageSrc ? imageSrc : '/assets/images/person-sil.png'}
        alt={`${firstName} ${lastname}`}
      />
    </div>
  );
};

PlayerImage.propTypes = {
  //
};

export default PlayerImage;
