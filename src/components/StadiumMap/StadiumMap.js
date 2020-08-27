import React from 'react';
import './StadiumMap.scss';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import LocationPin from '../LocationPin/LocationPin';

const StadiumMap = ({ geoLocation, stadiumName, color }) => {
  const location = {
    address: stadiumName,
    lat: geoLocation.latitude,
    lng: geoLocation.longitude,
  };
  return (
    <div className="component stadium-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_DEV_GMAPI }}
        defaultCenter={location}
        defaultZoom={15}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
          color={color}
        />
      </GoogleMapReact>
    </div>
  );
};

StadiumMap.propTypes = {
  geoLocation: PropTypes.shape({}).isRequired,
  stadiumName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default StadiumMap;
