import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { GET_NEWS_ARTICLES_ESPN } from '../api/api-calls';
import LoadingIcon from '../components/LoadingIcon';
import MessagePanel from '../components/MessagePanel';
import NewsCard from '../components/NewsCard/NewsCard';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { useQuery } from 'react-query';

const Home = () => {
  const { isLoading, error, data } = useQuery(['news'], GET_NEWS_ARTICLES_ESPN);

  return (
    <Container>
      {error ? (
        <MessagePanel messageType="error">Error loading homepage</MessagePanel>
      ) : null}
      {isLoading ? <LoadingIcon /> : null}
      <h2>News</h2>
      <Row>
        {data?.articles.map((newsItem, i) => {
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
