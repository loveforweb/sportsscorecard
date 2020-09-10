import MessagePanel from '../MessagePanel';
import QuarterHeading from '../QuarterHeading';
import QuarterSection from './QuarterSection';
import React from 'react';
import renderWithRouter from '../../testUtils';

describe('QuarterSection', () => {
  test('renders QuarterSection', () => {
    const { getByText } = renderWithRouter(
      <QuarterSection>
        <QuarterHeading quarterNumber={1} />
        <MessagePanel messageType="no-score" message="no score" />
      </QuarterSection>
    );
    expect(getByText(/1st Quarter/)).toBeInTheDocument();
    expect(getByText(/No scores/)).toBeInTheDocument();
  });
});
