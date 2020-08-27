import { API_STALE_TIMEOUT, GET_FIXTURES } from '../api/api-calls';

import Col from 'react-bootstrap/Col';
import FixtureCard from '../components/FixtureCard/FixtureCard';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { seasonFixtures } from '../mock-data/season-fixtures';
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

  // console.log(data);

  return (
    <Container>
      <h2>Fixtures</h2>
      {seasonFixtures.map((fixtureData, i) => {
        return (
          <Row key={`${i}-row`}>
            <Col xs={12}>
              <h3>{fixtureData.date}</h3>
            </Col>
            {fixtureData.games.map((gameData) => {
              return (
                <Col xs={12} className="mb3" key={gameData.schedule.id}>
                  <FixtureCard gameData={gameData} isFixture />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
};

export default Fixtures;
