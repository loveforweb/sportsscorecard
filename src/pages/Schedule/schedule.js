import './schedule.scss';

import {
  API_STALE_TIMEOUT,
  GET_FIXTURES,
  GET_STANDINGS,
} from '../../api/api-calls';
import React, { useEffect, useReducer, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FixtureCard from '../../components/FixtureCard';
import LoadingIcon from '../../components/LoadingIcon';
import Row from 'react-bootstrap/Row';
import WeeklyOption from '../../components/WeeklyOption';
import YearlyOption from '../../components/YearlyOption';
import fixturesReducer from '../../reducers/fixtures-reducer';
import { useQuery } from 'react-query';

const Schedule = () => {
  const [weekSelection, setWeekSelection] = useState(1);
  const [yearSelection, setYearSelection] = useState(new Date().getFullYear());
  const [state, dispatch] = useReducer(fixturesReducer, []);

  const { isLoading, data, error, refetch } = useQuery(
    ['week', { weekSelection, yearSelection }],
    GET_FIXTURES,
    {
      staleTime: API_STALE_TIMEOUT,
    }
  );

  const { data: standingsData } = useQuery(
    ['standings', { year: yearSelection }],
    GET_STANDINGS,
    {
      staleTime: API_STALE_TIMEOUT,
    }
  );

  useEffect(() => {
    if (data) {
      dispatch({
        type: 'FILTER',
        payload: data,
      });
    }
  }, [data]);

  if (error) {
    return <Container>Error</Container>;
  }

  if (isLoading) {
    return (
      <Container>
        <LoadingIcon />
      </Container>
    );
  }

  const handleWeekSelect = (e) => {
    setWeekSelection(e.target.value);
  };
  const handleYearSelect = (e) => {
    setYearSelection(e.target.value);
    refetch();
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h2>Schedule - Week {weekSelection}</h2>
        </Col>
        <Col xs={12}>
          <div className="filter-options">
            <YearlyOption
              onYearSelect={handleYearSelect}
              selectedOption={yearSelection}
            />
            <WeeklyOption
              onWeekSelect={handleWeekSelect}
              selectedOption={weekSelection}
            />
          </div>
        </Col>
      </Row>
      {isLoading ? (
        <LoadingIcon />
      ) : !isLoading && !error && state ? (
        state.map((fixtureData, i) => {
          return (
            <Row key={`${i}-row`}>
              <Col xs={12}>
                <h3>{fixtureData.date}</h3>
              </Col>
              {fixtureData.games.map((gameData) => {
                const showTimeOnly =
                  gameData.schedule.playedStatus === 'UNPLAYED';

                let awayTeamStats = [];
                let homeTeamStats = [];

                if (standingsData && standingsData?.teams.length > 0) {
                  const awayTeamId = gameData.schedule.awayTeam.id;
                  const homeTeamId = gameData.schedule.homeTeam.id;
                  awayTeamStats = standingsData?.teams.filter(({ team }) => {
                    return awayTeamId === team.id;
                  });
                  homeTeamStats = standingsData?.teams.filter(({ team }) => {
                    return homeTeamId === team.id;
                  });
                }

                return (
                  <Col xs={12} className="mb3" key={gameData.schedule.id}>
                    <FixtureCard
                      gameData={gameData}
                      isFixture
                      showTimeOnly={showTimeOnly}
                      awayTeamStats={awayTeamStats[0]?.stats}
                      homeTeamStats={homeTeamStats[0]?.stats}
                      showStats
                    />
                  </Col>
                );
              })}
            </Row>
          );
        })
      ) : null}
    </Container>
  );
};

export default Schedule;
