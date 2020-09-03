function gameReducer(state, action) {
  switch (action.type) {
    case 'AWAY_TEAM': {
      const awayTeamId = action.payload.game.awayTeam.id;

      const awayTeamInfo = action.payload.references.teamReferences.filter(
        (team) => {
          return team.id === awayTeamId;
        }
      );
      return [...state, ...awayTeamInfo];
    }

    case 'HOME_TEAM': {
      const homeTeamId = action.payload.game.homeTeam.id;

      const homeTeamInfo = action.payload.references.teamReferences.filter(
        (team) => {
          return team.id === homeTeamId;
        }
      );
      return [...state, ...homeTeamInfo];
    }

    default:
      return state;
  }
}

export default gameReducer;
