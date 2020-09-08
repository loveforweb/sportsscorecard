import GameDateTime from './GameDateTime';
import React from 'react';
import renderWithRouter from '../../testUtils';

const date = '01/01/2020';
const time = '14:00';

describe('GameDateTime', () => {
  test('renders GameDateTime', () => {
    const { getByText } = renderWithRouter(
      <GameDateTime date={date} time={time} isFixture={true} />
    );
    expect(getByText(/ko:/i)).toBeInTheDocument();
    expect(getByText(date)).toBeInTheDocument();
    expect(getByText(`${time} GMT`)).toBeInTheDocument();
  });

  test('renders GameDateTime when fixtures has been played', () => {
    const { getByText, queryByText } = renderWithRouter(
      <GameDateTime date={date} isFixture={false} />
    );
    expect(getByText(date)).toBeInTheDocument();
    expect(queryByText(/ko:/i)).not.toBeInTheDocument();
    expect(getByText(/played:/i)).toBeInTheDocument();
    expect(queryByText(`${time}`)).not.toBeInTheDocument();
  });
});
