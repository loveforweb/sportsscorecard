import React from 'react';
import TeamBadge from './TeamBadge';
import renderWithRouter from '../../testUtils';

describe('TeamBadge', () => {
  test('renders TeamBadge', () => {
    const { container } = renderWithRouter(
      <TeamBadge badge="https://static.www.nfl.com/image/private/t_q-best/league/ervfzgrqdpnc7lh5gqwq" />
    );

    const Image = container.querySelector('img');
    expect(Image).toBeInTheDocument();
  });
});
