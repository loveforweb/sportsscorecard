import Header from './Header';
import React from 'react';
import renderWithRouter from '../../testUtils';

describe('Header', () => {
  test('renders Header', () => {
    const { getByText, getByLabelText } = renderWithRouter(<Header />);
    expect(
      getByText('Sports Score Card', { type: 'link' })
    ).toBeInTheDocument();
    expect(getByText('News', { type: 'link' })).toBeInTheDocument();
    expect(getByText('Schedule', { type: 'link' })).toBeInTheDocument();
    expect(getByText('Standings', { type: 'link' })).toBeInTheDocument();
    expect(getByText('Teams', { type: 'link' })).toBeInTheDocument();
    expect(
      getByLabelText('Switch to light mode', { type: 'button' })
    ).toBeInTheDocument();
  });
});
