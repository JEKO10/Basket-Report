export const nextRound = (seed: number, participantsCount: number) => {
  return seed <= participantsCount ? seed : 0;
};

export const handleBracket = (participantsCount: number) => {
  const rounds = Math.ceil(Math.log(participantsCount) / Math.log(2));

  if (participantsCount < 2) {
    return [];
  }

  let matches = [[1, 2]];

  for (let round = 1; round < rounds; round++) {
    const roundMatches = [];
    const sum = Math.pow(2, round + 1) + 1;

    for (let i = 0; i < matches.length; i++) {
      let home = nextRound(matches[i][0], participantsCount);
      let away = nextRound(sum - matches[i][0], participantsCount);

      roundMatches.push([home, away]);
      home = nextRound(sum - matches[i][1], participantsCount);
      away = nextRound(matches[i][1], participantsCount);
      roundMatches.push([home, away]);
    }

    matches = roundMatches;
  }

  return matches;
};
