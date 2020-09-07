import './Header.scss';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import React from 'react';
import Row from 'react-bootstrap/Row';
import ThemeSwitcher from '../ThemeSwitcher';

// import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header className="component header">
      <Container>
        <Row>
          <Col md={4} className="d-flex align-items-center">
            <h1 className="site-heading">
              <Link to="/">Sports Score Card</Link>
            </h1>
          </Col>
          <Col md={8}>
            <Navigation />
          </Col>
          {/* <Col md={1} className="d-flex align-items-center justify-content-end">
            <ThemeSwitcher />
          </Col> */}
        </Row>
      </Container>
    </header>
  );
};

// Header.propTypes = {
//
// };

export default Header;
