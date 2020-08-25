import { API_STALE_TIMEOUT, GET_FIXTURES } from '../api/api-calls';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FixtureCard from '../components/FixtureCard/FixtureCard';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { data } from '../mock-data/fixtures';
import { useQuery } from 'react-query';

const Fixtures = () => {
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
      <Container>
        <h1>Fixtures</h1>
        <Row>
          {data.map((gameData) => {
            return (
              <Col xs={12} md={6} className="mb3" key={gameData.schedule.id}>
                <FixtureCard gameData={gameData} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Fixtures;
