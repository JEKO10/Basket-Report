export const nextRound = (seed: number, participantsCount: number) => {
  return seed <= participantsCount ? seed : 0;
};

export const handleBracket = (participants: number) => {
  const rounds = Math.ceil(Math.log(participants) / Math.log(2));

  if (participants < 2) {
    return [];
  }

  let matches = [[1, 2]];

  for (let round = 1; round < rounds; round++) {
    let roundMatches = [];
    let sum = Math.pow(2, round + 1) + 1;

    for (let i = 0; i < matches.length; i++) {
      let home = nextRound(matches[i][0], participants);
      let away = nextRound(sum - matches[i][0], participants);
      roundMatches.push([home, away]);

      home = nextRound(sum - matches[i][1], participants);
      away = nextRound(matches[i][1], participants);
      roundMatches.push([home, away]);
    }

    matches = roundMatches;
  }

  return matches;
};
