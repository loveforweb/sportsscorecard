import LoadingIcon from './LoadingIcon';
import React from 'react';
import renderWithRouter from '../../testUtils';

describe('LoadingIcon', () => {
  test('renders LoadingIcon', () => {
    const { getByText } = renderWithRouter(<LoadingIcon />);
    expect(getByText('Loading')).toBeInTheDocument();
  });
});
