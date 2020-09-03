import {
  API_STALE_TIMEOUT,
  GET_NEWS_ARTICLES,
  GET_NEWS_ARTICLES_ESPN,
} from '../api/api-calls';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LoadingIcon from '../components/LoadingIcon';
import NewsCard from '../components/NewsCard/NewsCard';
import React from 'react';
import Row from 'react-bootstrap/Row';
import data from '../mock-data/news-date-espn';
import { useQuery } from 'react-query';

const Home = () => {
  const { isLoading, error, data } = useQuery(['news'], GET_NEWS_ARTICLES_ESPN);

  if (error) {
    return (
      <Container>
        <div>Error loading homepage</div>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <div>Error loading homepage</div>
      </Container>
    );
  }

  return (
    <Container>
      {error ? <div>Error loading homepage</div> : null}
      {isLoading ? <LoadingIcon /> : null}
      <h2>Homepage</h2>
      <Row>
        {data.articles.map((newsItem, i) => {
          return (
            <Col xs={12} md={4} className="mb3" key={i}>
              <NewsCard {...newsItem} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
