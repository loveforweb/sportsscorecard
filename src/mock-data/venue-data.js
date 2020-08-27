const venuData = {
  lastUpdatedOn: '2020-08-27T10:16:21.138Z',
  venues: [
    {
      venue: {
        id: 68,
        name: "Levi's Stadium",
        city: 'Santa Clara, CA',
        country: 'USA',
        geoCoordinates: {
          latitude: 37.403,
          longitude: -121.97,
        },
        capacitiesByEventType: [
          {
            eventType: 'FOOTBALL',
            capacity: 75000,
          },
        ],
        playingSurface: 'Tifway II Bermuda Grass',
        baseballDimensions: [],
        hasRoof: false,
        hasRetractableRoof: false,
      },
      homeTeam: {
        id: 78,
        city: 'San Francisco',
        name: '49ers',
        abbreviation: 'SF',
        homeVenue: {
          id: 68,
          name: "Levi's Stadium",
        },
        teamColoursHex: ['#aa0000', '#b3995d'],
        socialMediaAccounts: [
          {
            mediaType: 'TWITTER',
            value: '49ers',
          },
        ],
        officialLogoImageSrc:
          'https://static.www.nfl.com/image/private/t_q-best/league/dxibuyxbk0b9ua5ih9hn',
      },
    },
  ],
};

export default venuData;
