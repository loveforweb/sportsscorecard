import React from 'react';
import renderWithRouter from '../../testUtils';
import PlayerImage from './PlayerImage';

describe('PlayerImage', () => {
  test('renders PlayerImage', () => {
    const { getByText } = renderWithRouter(<PlayerImage />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
