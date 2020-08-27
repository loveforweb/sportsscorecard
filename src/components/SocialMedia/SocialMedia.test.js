import React from 'react';
import renderWithRouter from '../../testUtils';
import SocialMedia from './SocialMedia';

describe('SocialMedia', () => {
  test('renders SocialMedia', () => {
    const { getByText } = renderWithRouter(<SocialMedia />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
