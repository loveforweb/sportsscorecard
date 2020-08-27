import React from 'react';
import StandingsTable from '../components/StandingsTable';
import { standingsData } from '../mock-data/standings';
import Container from 'react-bootstrap/Container';

const Standings = () => {
  return (
    <Container>
      <h2>Standings</h2>
      {standingsData.map((conf, i) => {
        return (
          <div className="conference-group" key={`${i}-conf`}>
            <div className="standings-table-header">{conf.conference}</div>
            {conf.tables.map((table, i) => {
              return <StandingsTable {...table} key={`${i}-key`} />;
            })}
          </div>
        );
      })}
    </Container>
  );
};

export default Standings;
