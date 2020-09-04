import './QuarterSection.scss';

import PropTypes from 'prop-types';
import React from 'react';

const QuarterSection = ({ children }) => {
  return <div className="component quarter-section">{children}</div>;
};

QuarterSection.propTypes = {
  children: PropTypes.array.isRequired,
};

export default QuarterSection;
