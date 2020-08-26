import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { teamNames } from '../../mock-data/standings';
import TeamCard from '../../components/TeamCard/TeamCard';
import './teams.scss';

const Teams = () => {
  return (
    <Container>
      <h1>Teams</h1>
      <Row>
        {teamNames.map((conf, i) => {
          console.log(conf);
          return (
            <Col xs={12} md={6} className="conference-group" key={`${i}-conf`}>
              <div className="teams-heading">{conf.conference}</div>
              {conf.teams.map((team) => {
                return <TeamCard {...team} key={team.id} />;
              })}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Teams;
