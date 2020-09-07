import './Header.scss';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import React from 'react';
import Row from 'react-bootstrap/Row';

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
        </Row>
      </Container>
    </header>
  );
};

export default Header;
