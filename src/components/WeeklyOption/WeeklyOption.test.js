import React from 'react';
import renderWithRouter from '../../testUtils';
import WeeklyOption from './WeeklyOption';

describe('WeeklyOption', () => {
  test('renders WeeklyOption', () => {
    const { getByText } = renderWithRouter(<WeeklyOption />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
