import React from 'react';
import Stadium from './Stadium';
import renderWithRouter from '../../testUtils';

describe('Stadium', () => {
  test('renders Stadium', () => {
    const { getByText } = renderWithRouter(
      <Stadium name="Los Angeles Memorial Coliseum" city="Los Angeles" />
    );
    expect(getByText(/Stadium/)).toBeInTheDocument();
    expect(
      getByText('Los Angeles Memorial Coliseum, Los Angeles')
    ).toBeInTheDocument();
  });
});
