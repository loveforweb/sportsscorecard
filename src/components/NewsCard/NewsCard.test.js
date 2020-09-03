import React from 'react';
import renderWithRouter from '../../testUtils';
import NewsCard from './NewsCard';

describe('NewsCard', () => {
  test('renders NewsCard', () => {
    const { getByText } = renderWithRouter(<NewsCard />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
