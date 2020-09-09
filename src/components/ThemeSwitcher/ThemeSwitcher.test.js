import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../../testUtils';

describe('ThemeSwitcher', () => {
  test('renders ThemeSwitcher', () => {
    const { getByLabelText, container } = renderWithRouter(<ThemeSwitcher />);
    expect(getByLabelText('Switch to light mode')).toBeInTheDocument();
    expect(container.querySelectorAll('svg')).toHaveLength(2);
  });

  test('renders ThemeSwitcher to light mode after button click', async () => {
    const { getByLabelText } = renderWithRouter(<ThemeSwitcher />);
    fireEvent.click(getByLabelText('Switch to light mode'));
    const switchedText = await getByLabelText('Switch to dark mode');
    expect(switchedText).toBeInTheDocument();
  });
});
