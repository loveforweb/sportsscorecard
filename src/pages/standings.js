import React from 'react';
import StandingsTable from '../components/StandingsTable';
import { data } from '../mock-data/standings';

const Standings = () => {
  return (
    <>
      <h1>Standings</h1>
      {data.map((conf, i) => {
        return (
          <div className="conference-group" key={`${i}-conf`}>
            <div className="standings-table-header">{conf.conference}</div>
            {conf.tables.map((table, i) => {
              return <StandingsTable {...table} key={`${i}-key`} />;
            })}
          </div>
        );
      })}
    </>
  );
};

export default Standings;
