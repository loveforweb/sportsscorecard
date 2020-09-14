function fixturesReducer(state, action) {
  switch (action.type) {
    case 'FILTER': {
      const {
        games,
        references: { teamReferences, venueReferences },
      } = action.payload;

      const setDate = (date) => {
        return new Date(date).toLocaleDateString('en-GB', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      };

      const setTeamData = games.map((game) => {
        const awayId = game.schedule.awayTeam.id;
        const homeId = game.schedule.homeTeam.id;
        const venueId = game.schedule.venue.id;

        const awayTeamRef = teamReferences.filter((item) => {
          return item.id === awayId;
        });

        const homeTeamRef = teamReferences.filter((item) => {
          return item.id === homeId;
        });

        const gameVenue = venueReferences.filter((item) => {
          return item.id === venueId;
        });

        return {
          ...game,
          schedule: {
            ...game.schedule,
            awayTeam: {
              ...game.schedule.awayTeam,
              ...awayTeamRef[0],
            },
            homeTeam: {
              ...game.schedule.homeTeam,
              ...homeTeamRef[0],
            },
            venue: {
              ...game.schedule.venue,
              ...gameVenue[0],
            },
          },
        };
      });

      const getDates = setTeamData.map((preDataGame) => {
        return setDate(preDataGame.schedule.startTime);
      });

      const theDates = [...new Set(getDates)];

      const finalData = theDates.map((date) => {
        const filteredGameDates = setTeamData.filter((item) => {
          return setDate(item.schedule.startTime) === date;
        });

        const gamesByTime = filteredGameDates.sort((a, b) => {
          return (
            new Date(a.schedule.startTime) - new Date(b.schedule.startTime)
          );
        });

        return {
          date,
          games: gamesByTime,
        };
      });

      return [...finalData];
    }

    case 'TEAM_FIXTURE': {
      const {
        games,
        references: { teamReferences, venueReferences },
      } = action.payload.fixtures;

      const filteredGame = games.map((game) => {
        const awayId = game.schedule.awayTeam.id;
        const homeId = game.schedule.homeTeam.id;
        const venueId = game.schedule.venue.id;

        const awayTeamRef = teamReferences.filter((item) => {
          return item.id === awayId;
        });

        const homeTeamRef = teamReferences.filter((item) => {
          return item.id === homeId;
        });

        const gameVenue = venueReferences.filter((item) => {
          return item.id === venueId;
        });

        return {
          ...game,
          schedule: {
            ...game.schedule,
            awayTeam: {
              ...game.schedule.awayTeam,
              ...awayTeamRef[0],
            },
            homeTeam: {
              ...game.schedule.homeTeam,
              ...homeTeamRef[0],
            },
            venue: {
              ...game.schedule.venue,
              ...gameVenue[0],
            },
          },
        };
      });

      return [...state, ...filteredGame];
    }

    default:
      return state;
  }
}

export default fixturesReducer;
