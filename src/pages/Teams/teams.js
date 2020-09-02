import './teams.scss';

import { API_STALE_TIMEOUT, GET_STANDINGS } from '../../api/api-calls';
import React, { useEffect, useReducer } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LoadingIcon from '../../components/LoadingIcon';
import Row from 'react-bootstrap/Row';
import TeamCard from '../../components/TeamCard/TeamCard';
import standingsReducer from '../../reducers/standings-reducer';
import { useQuery } from 'react-query';

const Teams = () => {
  const [state, dispatch] = useReducer(standingsReducer, []);
  const { isLoading, data, error } = useQuery('standings', GET_STANDINGS, {
    staleTime: API_STALE_TIMEOUT,
  });

  useEffect(() => {
    if (data) {
      dispatch({
        type: 'TEAM_NAMES',
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
      <h2>Teams</h2>
      <Row>
        {state.map((conf, i) => {
          return (
            <Col xs={12} md={6} className="conference-group" key={`${i}-conf`}>
              <h3 className="teams-heading">{conf.conference}</h3>
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
