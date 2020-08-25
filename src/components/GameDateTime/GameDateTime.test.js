import React from 'react';
import renderWithRouter from '../../testUtils';
import GameDateTime from './GameDateTime';

describe('GameDateTime', () => {
  test('renders GameDateTime', () => {
    const { getByText } = renderWithRouter(<GameDateTime />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
