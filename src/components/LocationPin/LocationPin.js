import React from 'react';
import './LocationPin.scss';
import PropTypes from 'prop-types';
import { ImLocation } from 'react-icons/im';

const LocationPin = ({ text, color }) => {
  return (
    <div className="component location-pin" style={{ color: color }}>
      <p className="pin-text" style={{ borderColor: color }}>
        {text}
      </p>
      <div className="pin">
        <ImLocation />
      </div>
    </div>
  );
};

LocationPin.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default LocationPin;
