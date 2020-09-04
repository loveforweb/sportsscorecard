import './QuarterHeading.scss';

import PropTypes from 'prop-types';
import React from 'react';

const rankSup = (rank) => {
  switch (rank) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const QuarterHeading = ({ quarterNumber }) => {
  return (
    <div className="component quarter-heading">
      <h3 className="heading">
        {quarterNumber}
        {rankSup(quarterNumber)} Quarter
      </h3>
    </div>
  );
};

QuarterHeading.propTypes = {
  quarterNumber: PropTypes.number.isRequired,
};

export default QuarterHeading;
