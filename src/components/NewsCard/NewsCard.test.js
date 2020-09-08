import NewsCard from './NewsCard';
import React from 'react';
import data from '../../mock-data/news-date-espn';
import renderWithRouter from '../../testUtils';

const newsItem = data.articles[0];

describe('NewsCard', () => {
  test('renders NewsCard', () => {
    const { getByText, getByAltText } = renderWithRouter(
      <NewsCard {...newsItem} />
    );
    expect(getByAltText('Lamar Jackson')).toBeInTheDocument();
    expect(getByText('Patrick Smith/Getty Images')).toBeInTheDocument();
    expect(
      getByText(
        'Baltimore Ravens QB Lamar Jackson declares himself fully healthy'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        "Ravens QB Lamar Jackson said he's fully recovered from a groin injury and that he's at 100% heading into the regular-season opener against the Browns."
      )
    ).toBeInTheDocument();
  });
});
