import React from 'react';
import renderWithRouter from '../../testUtils';
import TeamName from './TeamName';

describe('TeamName', () => {
  test('renders TeamName', () => {
    const { getByText } = renderWithRouter(<TeamName />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
