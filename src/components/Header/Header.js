import './Header.scss';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navigation from '../Navigation/Navigation';
import React from 'react';
import Row from 'react-bootstrap/Row';

// import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header className="component header">
      <Container>
        <Row>
          <Col md={2} className="d-flex align-items-center">
            Header
          </Col>
          <Col md={{ span: 9, offset: 1 }}>
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
