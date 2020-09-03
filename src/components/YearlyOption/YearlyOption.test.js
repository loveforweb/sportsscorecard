import React from 'react';
import renderWithRouter from '../../testUtils';
import YearlyOption from './YearlyOption';

describe('YearlyOption', () => {
  test('renders YearlyOption', () => {
    const { getByText } = renderWithRouter(<YearlyOption />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
