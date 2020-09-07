import React from 'react';
import renderWithRouter from '../../testUtils';
import ScrollToTop from './ScrollToTop';

describe('ScrollToTop', () => {
  test('renders ScrollToTop', () => {
    const { getByText } = renderWithRouter(<ScrollToTop />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
