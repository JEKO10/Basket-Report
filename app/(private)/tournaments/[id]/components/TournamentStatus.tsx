import { changeTournamentStatus } from "@/actions/tournaments";

const TournamentStart = async ({
  isOwner,
  id,
}: {
  isOwner: boolean;
  id: string | undefined;
}) => {
  return (
    <>
      {isOwner && (
        <form
          action={async () => {
            "use server";
            await changeTournamentStatus(id, true);
          }}
        >
          <button
            type="submit"
            className="bg-background text-text text-lg font-medium italic tracking-wider mt-3 py-2 px-5 rounded-lg transition hover:bg-background/65"
          >
            Počni turnir
          </button>
        </form>
      )}
    </>
  );
};

export default TournamentStart;
