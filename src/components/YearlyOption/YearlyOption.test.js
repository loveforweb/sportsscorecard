import React from 'react';
import YearlyOption from './YearlyOption';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../../testUtils';

const onYearSelect = jest.fn();
const selectedOption = 2020;

describe('YearlyOption', () => {
  test('renders YearlyOption', () => {
    const { getByDisplayValue } = renderWithRouter(
      <YearlyOption
        onYearSelect={onYearSelect}
        selectedOption={selectedOption}
      />
    );

    expect(getByDisplayValue('2020')).toBeInTheDocument();
  });

  test('renders YearlyOption with correct selected value', async () => {
    const { getByTestId, getAllByTestId } = renderWithRouter(
      <YearlyOption
        onYearSelect={onYearSelect}
        selectedOption={selectedOption}
      />
    );

    //The value should be the key of the option
    fireEvent.click(getByTestId('yearly-select'), {
      target: { value: 2019 },
    });
    let options = await getAllByTestId('yearly-option');
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
  });
});
