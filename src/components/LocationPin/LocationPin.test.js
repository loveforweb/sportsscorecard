import React from 'react';
import renderWithRouter from '../../testUtils';
import LocationPin from './LocationPin';

describe('LocationPin', () => {
  test('renders LocationPin', () => {
    const { getByText } = renderWithRouter(<LocationPin />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
