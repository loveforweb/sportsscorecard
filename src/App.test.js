import App from './App';
import React from 'react';
import { render } from '@testing-library/react';

window.scrollTo = jest.fn();

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Sports Score Card/i);
  expect(linkElement).toBeInTheDocument();
});
