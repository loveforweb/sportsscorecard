import PlayerStat from './PlayerStat';
import React from 'react';
import renderWithRouter from '../../testUtils';

describe('PlayerStat', () => {
  test('renders PlayerStat', () => {
    const { getByText, queryByText, queryByLabelText } = renderWithRouter(
      <PlayerStat title="POS" value="LB" ariaLabelTitle="Position" />
    );
    expect(getByText('POS')).toBeInTheDocument();
    expect(getByText('LB')).toBeInTheDocument();
    expect(queryByText('lbs')).not.toBeInTheDocument();
    expect(queryByLabelText('Position')).toBeInTheDocument();
  });

  test('renders PlayerStat weight and lbs metric', () => {
    const { getByText, queryByText, queryByLabelText } = renderWithRouter(
      <PlayerStat title="Weight" value="226" ariaLabelTitle="Weight" />
    );
    expect(getByText('Weight')).toBeInTheDocument();
    expect(getByText('226')).toBeInTheDocument();
    expect(queryByText('lbs')).toBeInTheDocument();
    expect(queryByLabelText('Weight')).toBeInTheDocument();
  });
});
