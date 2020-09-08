import PlayerImage from './PlayerImage';
import React from 'react';
import renderWithRouter from '../../testUtils';

const firstName = 'Joe';
const lastName = 'Bloggs';
const imageSrc = 'image.jpg';

describe('PlayerImage', () => {
  test('renders PlayerImage', () => {
    const { getByText, getByAltText } = renderWithRouter(
      <PlayerImage
        imageSrc={imageSrc}
        firstName={firstName}
        lastName={lastName}
      />
    );
    expect(getByAltText(`${firstName} ${lastName}`)).toBeInTheDocument();
  });
});
