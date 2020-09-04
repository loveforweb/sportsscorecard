import React from 'react';
import renderWithRouter from '../../testUtils';
import MessagePanel from './MessagePanel';

describe('MessagePanel', () => {
  test('renders MessagePanel', () => {
    const { getByText } = renderWithRouter(<MessagePanel />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
