import QuarterHeading from './QuarterHeading';
import React from 'react';
import renderWithRouter from '../../testUtils';

describe('QuarterHeading', () => {
  test('renders QuarterHeading 1st Quarter', () => {
    const { getByText } = renderWithRouter(
      <QuarterHeading quarterNumber={1} />
    );
    expect(getByText('1st Quarter')).toBeInTheDocument();
  });

  test('renders QuarterHeading 2nd Quarter', () => {
    const { getByText } = renderWithRouter(
      <QuarterHeading quarterNumber={2} />
    );
    expect(getByText('2nd Quarter')).toBeInTheDocument();
  });

  test('renders QuarterHeading 3rd Quarter', () => {
    const { getByText } = renderWithRouter(
      <QuarterHeading quarterNumber={3} />
    );
    expect(getByText('3rd Quarter')).toBeInTheDocument();
  });

  test('renders QuarterHeading 4th Quarter', () => {
    const { getByText } = renderWithRouter(
      <QuarterHeading quarterNumber={4} />
    );
    expect(getByText('4th Quarter')).toBeInTheDocument();
  });
});
