import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { teamNames } from '../mock-data/standings';
import TeamCard from '../components/TeamCard/TeamCard';

const Teams = () => {
  console.log(teamNames);
  return (
    <>
      <h1>Teams</h1>
      <Row>
        {teamNames.map((conf, i) => {
          return (
            <Col xs={12} md={6} className="conference-group" key={`${i}-conf`}>
              <div className="standings-table-header">{conf.conference}</div>
              {conf.teams.map((team, i) => {
                return (
                  <TeamCard
                    name={team.name}
                    city={team.city}
                    abbreviation={team.abbreviation}
                    badge={team.officialLogoImageSrc}
                  />
                );
              })}
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Teams;
