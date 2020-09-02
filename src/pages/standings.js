import { API_STALE_TIMEOUT, GET_STANDINGS } from '../api/api-calls';
import React, { useEffect, useReducer } from 'react';

// import { standingsData } from '../mock-data/standings';
import Container from 'react-bootstrap/Container';
import LoadingIcon from '../components/LoadingIcon';
import StandingsTable from '../components/StandingsTable';
import standingsReducer from '../reducers/standings-reducer';
import { useQuery } from 'react-query';

const Standings = () => {
  const [state, dispatch] = useReducer(standingsReducer, []);
  const { isLoading, data, error } = useQuery('standings', GET_STANDINGS, {
    staleTime: API_STALE_TIMEOUT,
  });

  useEffect(() => {
    if (data) {
      dispatch({
        type: 'FULL',
        payload: {
          teams: data.teams,
        },
      });
    }
  }, [data]);

  if (error) {
    return (
      <Container>
        <div>Error loadings standings</div>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <LoadingIcon />
      </Container>
    );
  }

  return (
    <Container>
      <h2>Standings</h2>
      {state.map((conf, i) => {
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
