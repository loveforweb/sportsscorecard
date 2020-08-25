import React from 'react';
import renderWithRouter from '../../testUtils';
import TeamBadge from './TeamBadge';

describe('TeamBadge', () => {
  test('renders TeamBadge', () => {
    const { getByText } = renderWithRouter(<TeamBadge />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
