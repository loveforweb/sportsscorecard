import data from './players-data';

// sort players into offences/defence based on position - use switch?

const filterOffense = data.players.filter((player) => {
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

const filterDefense = data.players.filter((player) => {
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
const playersData = {
  offense: filterOffense,
  defense: filterDefense,
};

export default playersData;
