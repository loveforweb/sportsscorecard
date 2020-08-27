import React from 'react';
import renderWithRouter from '../../testUtils';
import StadiumMap from './StadiumMap';

describe('StadiumMap', () => {
  test('renders StadiumMap', () => {
    const { getByText } = renderWithRouter(<StadiumMap />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
