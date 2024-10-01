import React, { useEffect, useRef, useState } from "react";

const ScoreModal = ({
  match,
  teams,
  setIsModalOpen,
  setScore,
}: {
  match: number[];
  teams?: string[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<
    React.SetStateAction<{
      teamA: number | null;
      teamB: number | null;
    }>
  >;
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [tempScore, setTempScore] = useState<{
    teamA: number | null;
    teamB: number | null;
  }>({
    teamA: null,
    teamB: null,
  });
  const ref = useRef<HTMLDivElement>(null);

  const handleClosing = () => {
    setIsVisible(false);

    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  const handleSubmit = () => {
    if (tempScore.teamA === null || tempScore.teamB === null) {
      handleClosing();
      return;
    }

    setScore({
      teamA: tempScore.teamA,
      teamB: tempScore.teamB,
    });

    handleClosing();
  };

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        handleClosing();
      }
    };

    document.addEventListener("mousedown", clickOutside, true);

    return () => {
      document.removeEventListener("mousedown", clickOutside, true);
    };
  }, [setIsModalOpen]);

  return (
    <section
      className={`fixed top-0 left-0 flex justify-center items-center h-full w-full z-10 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-black/70`}
    >
      <article
        ref={ref}
        className="flex justify-center items-start flex-col bg-primary h-96 w-1/2 p-10 rounded [&>div]:flex [&>div]:justify-between [&>div]:items-center [&>div]:w-full"
      >
        <h2 className="font-lusitana text-3xl mb-5 font-medium">
          Dodavanje rezultata
        </h2>
        <div className="bg-black px-5 py-3 rounded-t [&>p]:font-medium [&>p]:text-white">
          <p>Učesnici</p>
          <p>Rezultat</p>
        </div>
        <div className="bg-accent p-5">
          <p>{teams && teams?.length !== 0 ? teams[match[0] - 1] : match[0]}</p>
          <input
            type="number"
            className="bg-black text-white h-8 w-14 px-2 text-sm rounded-sm outline-none"
            onChange={(e) =>
              setTempScore({ ...tempScore, teamA: parseInt(e.target.value) })
            }
          />
        </div>
        <div className="bg-accent/50 p-5 rounded-b">
          <p>{teams && teams?.length !== 0 ? teams[match[1] - 1] : match[1]}</p>
          <input
            type="number"
            className="bg-black text-white h-8 w-14 px-2 text-sm rounded-sm outline-none"
            onChange={(e) =>
              setTempScore({ ...tempScore, teamB: parseInt(e.target.value) })
            }
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-background text-text text-lg font-medium italic tracking-wider mt-5 py-2 px-5 rounded-lg transition hover:bg-background/65"
        >
          Potvrdi rezultat
        </button>
      </article>
    </section>
  );
};

export default ScoreModal;
