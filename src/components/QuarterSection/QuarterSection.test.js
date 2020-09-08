import QuarterSection from './QuarterSection';
import React from 'react';
import renderWithRouter from '../../testUtils';

describe('QuarterSection', () => {
  test('renders QuarterSection', () => {
    const { getByText } = renderWithRouter(
      <QuarterSection>Hello World</QuarterSection>
    );
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
