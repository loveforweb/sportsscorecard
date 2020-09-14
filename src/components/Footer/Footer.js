import './Footer.scss';

import React, { useContext } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MySportFeedLogoBlack from '../../assets/images/full_football_black.png';
import MySportFeedLogoWhite from '../../assets/images/full_football_white.png';
import Row from 'react-bootstrap/Row';
import { ThemeContext } from '../../themeStore';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="component footer">
      <Container>
        <Row>
          <Col>
            <div className="affiliate-item">
              Data provided by{' '}
              <a
                href="https://www.mysportsfeeds.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="sr-only">MySportsFeeds.com</span>
                <div className="image-wrapper">
                  <img
                    src={
                      theme === 'dark'
                        ? MySportFeedLogoBlack
                        : MySportFeedLogoWhite
                    }
                    alt="MySportsFeeds.com logo"
                  />
                </div>
              </a>
              .
            </div>
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
