import { JsonValue } from "next-auth/adapters";

import { changeTournamentStatus } from "@/actions/tournaments";
import { Scores } from "@/schemas";

interface TournamentStart {
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
}: TournamentStart) => {
  const finalScore = scores.find(
    (score) =>
      score.roundIndex === bracket?.length - 1 && score.matchIndex === 0
  );

  if (isOwner && !hasStarted) {
    return (
      <form
        action={async () => {
          "use server";
          await changeTournamentStatus(id, true, false);
        }}
      >
        <button
          type="submit"
          className="bg-background text-text text-lg font-medium italic tracking-wider mt-3 py-2 px-5 rounded-lg transition hover:bg-background/65"
        >
          Počni turnir
        </button>
      </form>
    );
  }
  return (
    <>
      {isOwner &&
        finalScore?.teamA !== null &&
        finalScore?.teamB !== null &&
        !hasEnded && (
          <form
            action={async () => {
              "use server";
              await changeTournamentStatus(id, true, true);
            }}
          >
            <button
              type="submit"
              className="bg-background text-text text-lg font-medium italic tracking-wider mt-3 py-2 px-5 rounded-lg transition hover:bg-background/65"
            >
              Završi turnir
            </button>
          </form>
        )}
    </>
  );
};

export default TournamentStart;
