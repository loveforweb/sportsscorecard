import { API_STALE_TIMEOUT, GET_FIXTURES } from '../api/api-calls';

import Col from 'react-bootstrap/Col';
import FixtureCard from '../components/FixtureCard/FixtureCard';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { data } from '../mock-data/season-results';
import { useQuery } from 'react-query';

const Results = () => {
  //   const { isLoading, data, error, isFetching } = useQuery(
  //     'todos',
  //     GET_FIXTURES,
  //     {
  //       staleTime: API_STALE_TIMEOUT,
  //     }
  //   );

  //   if (isLoading) {
  //     return <div>Loading</div>;
  //   }

  //   if (error) {
  //     return <div>Error</div>;
  //   }

  return (
    <>
      <h1>Results</h1>
      {data.map((arrayData, i) => {
        return (
          <Row key={`${i}-row`}>
            <Col xs={12}>
              <h2>{arrayData.date}</h2>
            </Col>
            {arrayData.games.map((gameData) => {
              return (
                <Col xs={12} className="mb3" key={gameData.schedule.id}>
                  <FixtureCard gameData={gameData} isFixture />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </>
  );
};

export default Results;
