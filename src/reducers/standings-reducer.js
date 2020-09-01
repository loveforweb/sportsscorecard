function standingsReducer(state, action) {
  switch (action.type) {
    case 'FULL': {
      const filterTeams = (param) => {
        return action.payload.teams
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

      return standingsData;
    }

    case 'CONF': {
      const teamData = action.payload.teams.filter((item) => {
        return item.team.id === action.payload.id;
      });

      const filteredTeams = action.payload.teams
        .filter((item) => {
          return (
            item.divisionRank.divisionName ===
            teamData[0].divisionRank.divisionName
          );
        })
        .sort((a, b) => a.divisionRank.rank - b.divisionRank.rank);

      const { team, stats, divisionRank } = teamData[0];

      return [
        {
          division: 'AFC North',
          basicInfo: {
            city: team.city,
            name: team.name,
            abbreviation: team.abbreviation,
          },
          standingsInfo: {
            dRank: divisionRank.rank,
            dName: divisionRank.divisionName,
          },
          stats: {
            wins: stats.standings.wins,
            losses: stats.standings.losses,
            ties: stats.standings.ties,
          },
          teams: filteredTeams,
        },
      ];
    }

    case 'TEAM': {
      const team = action.payload.teams.filter((item) => {
        return item.team.id === action.payload.id;
      });

      return team;
    }

    case 'TEAMS': {
      return [...state];
    }

    default:
      return state;
  }
}

export default standingsReducer;
