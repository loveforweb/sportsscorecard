import React from 'react';
import renderWithRouter from '../../testUtils';
import QuarterSection from './QuarterSection';

describe('QuarterSection', () => {
  test('renders QuarterSection', () => {
    const { getByText } = renderWithRouter(<QuarterSection />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
