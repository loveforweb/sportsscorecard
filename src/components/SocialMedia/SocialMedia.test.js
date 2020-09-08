import React from 'react';
import SocialMedia from './SocialMedia';
import renderWithRouter from '../../testUtils';

const socialAccounts = [
  {
    mediaType: 'Twitter',
    value: '@TwitterHandle',
  },
  {
    mediaType: 'Instagram',
    value: '@InstaHandle',
  },
];

describe('SocialMedia', () => {
  test('renders SocialMedia', () => {
    const { getByText } = renderWithRouter(
      <SocialMedia socialAccounts={socialAccounts} />
    );
    expect(getByText('@TwitterHandle')).toBeInTheDocument();
    expect(getByText('@TwitterHandle').closest('a')).toHaveAttribute(
      'href',
      'https://twitter.com/@TwitterHandle'
    );
    expect(getByText('@InstaHandle')).toBeInTheDocument();
    expect(getByText('@InstaHandle').closest('a')).toHaveAttribute(
      'href',
      'https://instagram.com/@InstaHandle'
    );
  });
});
