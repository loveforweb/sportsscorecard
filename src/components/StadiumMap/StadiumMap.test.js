import React from 'react';
import StadiumMap from './StadiumMap';
import renderWithRouter from '../../testUtils';

const stadiumName = 'Bank of America Stadium, Charlotte, NC';
const geoLocation = {
  latitude: 35.225833,
  longitude: -80.852778,
};
const color = 'red';

describe('StadiumMap', () => {
  test('renders StadiumMap', () => {
    const { getByText } = renderWithRouter(
      <StadiumMap
        geoLocation={geoLocation}
        stadiumName={stadiumName}
        color={color}
      />
    );
    expect(
      getByText('Bank of America Stadium, Charlotte, NC')
    ).toBeInTheDocument();
  });
});
