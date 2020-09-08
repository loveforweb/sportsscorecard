import MessagePanel from './MessagePanel';
import React from 'react';
import renderWithRouter from '../../testUtils';

const message = 'This is a message';
describe('MessagePanel', () => {
  test('renders MessagePanel', () => {
    const { getByText } = renderWithRouter(
      <MessagePanel messageType="default">{message}</MessagePanel>
    );
    expect(getByText(message)).toBeInTheDocument();
  });
});
