import React from 'react';
import renderWithRouter from '../../testUtils';
import Stadium from './Stadium';

describe('Stadium', () => {
  test('renders Stadium', () => {
    const { getByText } = renderWithRouter(<Stadium />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
