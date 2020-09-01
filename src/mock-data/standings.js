import data from './standings-data';

const filterTeams = (param) => {
  return data.teams
    .filter((item) => {
      return item.divisionRank.divisionName === param;
    })
    .sort((a, b) => a.divisionRank.rank - b.divisionRank.rank);
};

const NFCNorth = filterTeams('NFC North');
const NFCEast = filterTeams('NFC East');
const NFCSouth = filterTeams('NFC South');
const NFCWest = filterTeams('NFC West');
const AFCNorth = filterTeams('AFC North');
const AFCEast = filterTeams('AFC East');
const AFCSouth = filterTeams('AFC South');
const AFCWest = filterTeams('AFC West');

const standingsData = [
  {
    conference: 'American Football Conference',
    tables: [
      {
        division: 'AFC North',
        teams: AFCNorth,
      },
      {
        division: 'AFC East',
        teams: AFCEast,
      },
      {
        division: 'AFC South',
        teams: AFCSouth,
      },
      {
        division: 'AFC West',
        teams: AFCWest,
      },
    ],
  },
  {
    conference: 'National Football Conference',
    tables: [
      {
        division: 'NFC North',
        teams: NFCNorth,
      },
      {
        division: 'NFC East',
        teams: NFCEast,
      },
      {
        division: 'NFC South',
        teams: NFCSouth,
      },
      {
        division: 'NFC West',
        teams: NFCWest,
      },
    ],
  },
];

const filteredConference = (conf) => {
  return data.teams
    .filter((team) => {
      return team.conferenceRank.conferenceName === conf;
    })
    .sort((a, b) => {
      const cityA = a.team.city.toLowerCase();
      const cityB = b.team.city.toLowerCase();

      if (cityA < cityB) {
        return -1;
      }
      if (cityA > cityB) {
        return 1;
      }
      return 0;
    });
};

const teamNames = [
  {
    conference: 'AFC',
    teams: filteredConference('AFC'),
  },
  {
    conference: 'NFC',
    teams: filteredConference('NFC'),
  },
];

// const teamNames = standingsData.map((confData) => {
//   const conferenceData = confData.tables.map((table) => {
//     return table.teams.map((item) => {
//       return {
//         ...item,
//         id: item.team.id,
//       };
//     });
//   });

//   const sortedByName = [].concat(...conferenceData).sort((a, b) => {
//     const cityA = a.team.city.toLowerCase();
//     const cityB = b.team.city.toLowerCase();

//     if (cityA < cityB) {
//       return -1;
//     }
//     if (cityA > cityB) {
//       return 1;
//     }
//     return 0;
//   });

//   return {
//     conference: confData.conference.includes('National')
//       ? 'NFC Teams'
//       : 'AFC Teams',
//     teams: sortedByName,
//   };
// });

// const teamNames = [];

export { standingsData, teamNames };
