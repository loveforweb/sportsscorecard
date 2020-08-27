import React from 'react';
import './SocialMedia.scss';
import PropTypes from 'prop-types';
import { FaTwitter } from 'react-icons/fa';

const socialIcons = (icon) => {
  switch (icon) {
    case 'twitter':
      return <FaTwitter />;

    default:
      break;
  }
};

const SocialMedia = ({ socialAccounts }) => {
  return (
    <div className="component social-media">
      <ul>
        {socialAccounts.map((social, i) => {
          return (
            <li key={i}>
              <div className="social-icon">
                {socialIcons(social.mediaType.toLowerCase())}
              </div>
              <a
                href={`https://${social.mediaType.toLowerCase()}.com/${
                  social.value
                }`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {social.value}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

SocialMedia.propTypes = {
  socialAccounts: PropTypes.array.isRequired,
};

export default SocialMedia;
