import React from 'react';
import renderWithRouter from '../../testUtils';
import TeamScore from './TeamScore';

describe('TeamScore', () => {
  test('renders TeamScore', () => {
    const { getByText } = renderWithRouter(<TeamScore />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
