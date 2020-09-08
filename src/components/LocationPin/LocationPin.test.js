import LocationPin from './LocationPin';
import React from 'react';
import renderWithRouter from '../../testUtils';
const text = 'my pin location';
const color = 'red';

describe('LocationPin', () => {
  test('renders LocationPin', () => {
    const { getByText } = renderWithRouter(
      <LocationPin text={text} color={color} />
    );
    expect(getByText(text)).toBeInTheDocument();
  });
});
