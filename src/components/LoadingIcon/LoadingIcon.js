import './LoadingIcon.scss';

import Container from 'react-bootstrap/Container';
import React from 'react';

const LoadingIcon = () => {
  return (
    <Container>
      <div className="component loading-icon">
        <span>Loading</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="160"
          height="20"
          viewBox="0 0 128 16"
        >
          <path
            fill="#fff"
            d="M6.4 4.8A3.2 3.2 0 113.2 8a3.2 3.2 0 013.2-3.2zm12.8 0A3.2 3.2 0 1116 8a3.2 3.2 0 013.2-3.2zm12.8 0A3.2 3.2 0 1128.8 8 3.2 3.2 0 0132 4.8zm12.8 0A3.2 3.2 0 1141.6 8a3.2 3.2 0 013.2-3.2zm12.8 0A3.2 3.2 0 1154.4 8a3.2 3.2 0 013.2-3.2zm12.8 0A3.2 3.2 0 1167.2 8a3.2 3.2 0 013.2-3.2zm12.8 0A3.2 3.2 0 1180 8a3.2 3.2 0 013.2-3.2zm12.8 0A3.2 3.2 0 1192.8 8 3.2 3.2 0 0196 4.8zm12.8 0a3.2 3.2 0 11-3.2 3.2 3.2 3.2 0 013.2-3.2zm12.8 0a3.2 3.2 0 11-3.2 3.2 3.2 3.2 0 013.2-3.2z"
          />
          <g>
            <path
              fill="#fff"
              d="M-42.7 3.84A4.16 4.16 0 01-38.54 8a4.16 4.16 0 01-4.16 4.16A4.16 4.16 0 01-46.86 8a4.16 4.16 0 014.16-4.16zm12.8-.64A4.8 4.8 0 01-25.1 8a4.8 4.8 0 01-4.8 4.8A4.8 4.8 0 01-34.7 8a4.8 4.8 0 014.8-4.8zm12.8-.64A5.44 5.44 0 01-11.66 8a5.44 5.44 0 01-5.44 5.44A5.44 5.44 0 01-22.54 8a5.44 5.44 0 015.44-5.44z"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="23 0;36 0;49 0;62 0;74.5 0;87.5 0;100 0;113 0;125.5 0;138.5 0;151.5 0;164.5 0;178 0"
              calcMode="discrete"
              dur="1170ms"
              repeatCount="indefinite"
            />
          </g>
        </svg>
      </div>
    </Container>
  );
};

export default LoadingIcon;
