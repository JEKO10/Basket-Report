import { getTournamentById } from "@/actions/tournaments";

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

export const handleRounds = (participantsCount: number) => {
  const rounds = Math.ceil(Math.log(participantsCount) / Math.log(2));

  const bracketRounds: number[][][] = [];
  let participants = participantsCount;

  for (let roundIndex = 0; roundIndex < rounds; roundIndex++) {
    const bracket = handleBracket(participants);

    if (roundIndex === 0) {
      bracketRounds.push(bracket);
    } else {
      const nullBracket = bracket.map(() => [null, null]);

      bracketRounds.push(nullBracket);
    }

    participants = Math.ceil(participants / 2);
  }

  return bracketRounds;
};

export const advancePlayers = (
  bracketRounds: number[][][],
  roundIndex: number,
  matchIndex: number,
  winner: number
) => {
  if (roundIndex >= bracketRounds.length - 1) {
    return bracketRounds;
  }

  const nextMatchIndex = Math.floor(matchIndex / 2);

  if (matchIndex % 2 === 0) {
    bracketRounds[roundIndex + 1][nextMatchIndex][0] = winner;
  } else {
    bracketRounds[roundIndex + 1][nextMatchIndex][1] = winner;
  }

  return bracketRounds;
};

export const getWinner = async (tournamentId: string | undefined) => {
  let data;
  if (tournamentId) {
    data = await getTournamentById(tournamentId);
  }

  if (!data?.bracket && !data) {
    return { winner: "", secondPlace: "" };
  }

  const { bracket } = data;

  const finalScore = data?.scores.find(
    (score) =>
      score.roundIndex === bracket?.length - 1 && score.matchIndex === 0
  );

  const finalMatch = bracket[bracket.length - 1][0];

  if (finalScore) {
    const [winnerIndex, secondIndex] =
      finalScore.teamA > finalScore.teamB
        ? [finalMatch[0], finalMatch[1]]
        : [finalMatch[1], finalMatch[0]];

    const winner = data.teams[winnerIndex - 1];
    const secondPlace = data.teams[secondIndex - 1];

    return { winner, secondPlace };
  }
};
