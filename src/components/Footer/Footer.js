import './Footer.scss';

import React, { useContext } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ThemeContext } from '../../themeStore';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="component footer">
      <Container>
        <Row>
          <Col>
            <div class="affiliate-item">
              Data provided by{' '}
              <a
                href="https://www.mysportsfeeds.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="sr-only">MySportsFeeds.com</span>
                <div className="image-wrapper">
                  <img
                    src={`./assets/images/full_football_${
                      theme === 'dark' ? 'black' : 'white'
                    }.png`}
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
