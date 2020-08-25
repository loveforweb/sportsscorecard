import './Stadium.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Stadium = ({ name, city }) => {
  return (
    <div className="component stadium">
      Stadium:
      <span className="stadium-name"> {name}</span>,
      <span className="stadium-location">{city}</span>
    </div>
  );
};

Stadium.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default Stadium;
