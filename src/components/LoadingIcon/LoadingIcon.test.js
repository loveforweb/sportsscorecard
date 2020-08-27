import React from 'react';
import renderWithRouter from '../../testUtils';
import LoadingIcon from './LoadingIcon';

describe('LoadingIcon', () => {
  test('renders LoadingIcon', () => {
    const { getByText } = renderWithRouter(<LoadingIcon />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
