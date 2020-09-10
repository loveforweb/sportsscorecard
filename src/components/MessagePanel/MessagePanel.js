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
  message: PropTypes.string.isRequired,
};

export default MessagePanel;
