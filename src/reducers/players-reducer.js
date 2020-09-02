function playersReducer(state, action) {
  switch (action.type) {
    case 'TEAM': {
      const filterOffense = action.payload.players.filter((player) => {
        const playerPosition = player.player.primaryPosition;
        return (
          playerPosition === 'QB' ||
          playerPosition === 'RB' ||
          playerPosition === 'FB' ||
          playerPosition === 'LT' ||
          playerPosition === 'G' ||
          playerPosition === 'LG' ||
          playerPosition === 'C' ||
          playerPosition === 'RG' ||
          playerPosition === 'RT' ||
          playerPosition === 'WR' ||
          playerPosition === 'TE'
        );
      });

      const filterDefense = action.payload.players.filter((player) => {
        const playerPosition = player.player.primaryPosition;
        return (
          playerPosition === 'FS' ||
          playerPosition === 'SS' ||
          playerPosition === 'CB' ||
          playerPosition === 'LB' ||
          playerPosition === 'ILB' ||
          playerPosition === 'OLB' ||
          playerPosition === 'MLB' ||
          playerPosition === 'DE' ||
          playerPosition === 'N'
        );
      });

      return {
        offense: filterOffense,
        defense: filterDefense,
      };
    }

    case 'INDIVIDUAL': {
      return state;
    }

    default:
      return state;
  }
}

export default playersReducer;
