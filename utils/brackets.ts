import { getTournamentById } from "@/actions/tournaments";

export const nextRound = (
  seed: number | null,
  participantsCount: number
): number | null => {
  return seed !== null && seed <= participantsCount ? seed : null;
};

export const handleBracket = (participantsCount: number) => {
  const rounds = Math.ceil(Math.log(participantsCount) / Math.log(2));

  if (participantsCount < 2) {
    return [];
  }

  let matches: (number | null)[][] = [[1, 2]];

  for (let round = 1; round < rounds; round++) {
    const roundMatches = [];
    const sum = Math.pow(2, round + 1) + 1;

    for (let i = 0; i < matches.length; i++) {
      const firstMatch = matches[i][0];
      const secondMatch = matches[i][1];

      let home = nextRound(firstMatch, participantsCount);
      let away = firstMatch && nextRound(sum - firstMatch, participantsCount);
      roundMatches.push([home, away]);

      home = secondMatch && nextRound(sum - secondMatch, participantsCount);
      away = nextRound(secondMatch, participantsCount);
      roundMatches.push([home, away]);
    }

    matches = roundMatches;
  }

  return matches;
};

export const handleRounds = (participantsCount: number) => {
  const rounds = Math.ceil(Math.log(participantsCount) / Math.log(2));

  const bracketRounds: (number | null)[][][] = [];
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

  bracketRounds[0].forEach((match, index) => {
    const [teamA, teamB] = match;

    if (teamA === null || teamB === null) {
      const autoWinner = teamA !== null ? teamA : teamB;

      const nextMatchIndex = Math.floor(index / 2);

      if (index % 2 === 0) {
        bracketRounds[1][nextMatchIndex][0] = autoWinner;
      } else {
        bracketRounds[1][nextMatchIndex][1] = autoWinner;
      }
    }
  });

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

  if (
    !data ||
    !Array.isArray(data.bracket) ||
    !Array.isArray(data.scores) ||
    data.scores.length === 0
  ) {
    return { winner: "", secondPlace: "" };
  }

  const { bracket, scores, teams } = data;

  const finalScore = scores.find(
    (score) => score.roundIndex === bracket.length - 1 && score.matchIndex === 0
  );

  if (!finalScore) {
    return { winner: "", secondPlace: "" };
  }

  const finalMatch = (bracket[bracket.length - 1] as [number, number][])[0];

  const [winnerIndex, secondIndex] =
    finalScore.teamA > finalScore.teamB
      ? [finalMatch[0], finalMatch[1]]
      : [finalMatch[1], finalMatch[0]];

  const winner = teams[winnerIndex - 1];
  const secondPlace = teams[secondIndex - 1];

  if (teams.length !== 0) {
    return { winner, secondPlace };
  } else {
    return { winner: winnerIndex, secondPlace: secondIndex };
  }
};
