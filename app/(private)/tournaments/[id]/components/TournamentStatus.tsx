import { JsonArray, JsonValue } from "next-auth/adapters";

import { changeTournamentStatus } from "@/actions/tournaments";
import { Scores } from "@/schemas";

interface TournamentStartProps {
  id: string;
  isOwner: boolean;
  hasStarted: boolean;
  hasEnded: boolean;
  scores: Scores;
  bracket: JsonValue;
}

const TournamentStart = async ({
  id,
  isOwner,
  hasStarted,
  hasEnded,
  scores,
  bracket,
}: TournamentStartProps) => {
  const bracketArray = bracket as JsonArray;
  const finalScore = scores.find(
    (score) =>
      score.roundIndex === bracketArray.length - 1 && score.matchIndex === 0
  );

  const handleSubmit = async () => {
    "use server";

    if (!hasStarted) {
      await changeTournamentStatus(id, true, false);
    } else if (finalScore !== undefined && !hasEnded) {
      await changeTournamentStatus(id, true, true);
    }
  };

  if (!isOwner || hasEnded || (hasStarted && !finalScore)) return null;

  return (
    <form action={handleSubmit}>
      <button
        type="submit"
        className="bg-background text-text text-lg font-medium italic tracking-wider mt-3 py-2 px-5 rounded-lg transition hover:bg-background/65"
      >
        {!hasStarted ? "Počni turnir" : finalScore ? "Završi turnir" : ""}
      </button>
    </form>
  );
};

export default TournamentStart;
