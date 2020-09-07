import Footer from './Footer';
import React from 'react';
import renderWithRouter from '../../testUtils';

describe('Footer', () => {
  test('renders Footer', () => {
    const { getByText } = renderWithRouter(<Footer />);
    expect(
      getByText(
        'This site is not affiliated with the National Football League (NFL) or any of their sub-affiliates.'
      )
    ).toBeInTheDocument();
  });
});
