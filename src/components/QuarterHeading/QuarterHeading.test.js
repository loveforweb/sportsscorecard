import React from 'react';
import renderWithRouter from '../../testUtils';
import QuarterHeading from './QuarterHeading';

describe('QuarterHeading', () => {
  test('renders QuarterHeading', () => {
    const { getByText } = renderWithRouter(<QuarterHeading />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
