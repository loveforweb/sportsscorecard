import './Footer.scss';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import PropTypes from 'prop-types';

const Footer = () => {
  return (
    <div className="component footer">
      <Container>
        <Row>
          <Col>
            <p>
              Data retrieved from{' '}
              <a
                href="https://www.mysportsfeeds.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                MySportsFeeds.com
              </a>
              .
            </p>
            <p>
              This site is not affiliated with the National Football League
              (NFL) or any of their sub-affiliates.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Footer.propTypes = {
//
// };

export default Footer;
