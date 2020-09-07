import './Footer.scss';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

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

export default Footer;
