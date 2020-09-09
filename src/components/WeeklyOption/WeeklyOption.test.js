import React from 'react';
import WeeklyOption from './WeeklyOption';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../../testUtils';

const onWeekSelect = jest.fn();
const selectedOption = 4;

describe('WeeklyOption', () => {
  test('renders WeeklyOption', () => {
    const { getByDisplayValue } = renderWithRouter(
      <WeeklyOption
        onWeekSelect={onWeekSelect}
        selectedOption={selectedOption}
      />
    );

    expect(getByDisplayValue('Week 4')).toBeInTheDocument();
  });

  test('renders WeeklyOption with correct selected value', async () => {
    const { getByTestId, getAllByTestId } = renderWithRouter(
      <WeeklyOption
        onWeekSelect={onWeekSelect}
        selectedOption={selectedOption}
      />
    );

    //The value should be the key of the option
    fireEvent.click(getByTestId('weekly-select'), {
      target: { value: 1 },
    });
    let options = await getAllByTestId('weekly-option');
    expect(options[0].selected).toBeTruthy();
    expect(options[5].selected).toBeFalsy();
  });
});
