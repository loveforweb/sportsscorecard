import './MessagePanel.scss';

import PropTypes from 'prop-types';
import React from 'react';

const MessagePanel = ({ message, messageType }) => {
  return (
    <div className={`component message-panel ${messageType}`}>{message}</div>
  );
};

MessagePanel.propTypes = {
  messageType: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default MessagePanel;
