import React from 'react';
import renderWithRouter from '../../testUtils';
import ThemeSwitcher from './ThemeSwitcher';

describe('ThemeSwitcher', () => {
  test('renders ThemeSwitcher', () => {
    const { getByText } = renderWithRouter(<ThemeSwitcher />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
