import './Header.scss';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import React from 'react';
import Row from 'react-bootstrap/Row';

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
          <Col md={{ span: 7, offset: 1 }}>
            <Navigation />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

// Header.propTypes = {
//
// };

export default Header;
