import './teams.scss';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import TeamCard from '../../components/TeamCard/TeamCard';
import { teamNames } from '../../mock-data/standings';

const Teams = () => {
  return (
    <Container>
      <h1>Teams</h1>
      <Row>
        {teamNames.map((conf, i) => {
          return (
            <Col xs={12} md={6} className="conference-group" key={`${i}-conf`}>
              <div className="teams-heading">{conf.conference}</div>
              {conf.teams.map((item) => {
                return <TeamCard {...item} key={item.team.id} />;
              })}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Teams;
