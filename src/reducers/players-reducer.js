function playersReducer(state, action) {
  switch (action.type) {
    case 'TEAM': {
      const filterOffense = action.payload.players
        .filter((player) => {
          const playerPosition =
            player.player?.position || player.player?.primaryPosition;
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
        })
        .sort((a, b) => {
          return a.player.jerseyNumber - b.player.jerseyNumber;
        });

      const filterDefense = action.payload.players
        .filter((player) => {
          const playerPosition =
            player.player?.position || player.player?.primaryPosition;
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
        })
        .sort((a, b) => {
          return a.player.jerseyNumber - b.player.jerseyNumber;
        });

      return {
        ...state,
        offense: filterOffense,
        defense: filterDefense,
      };
    }

    default:
      return state;
  }
}

export default playersReducer;
