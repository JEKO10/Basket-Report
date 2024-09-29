import React, { useEffect, useRef, useState } from "react";

const ScoreModal = ({
  match,
  teams,
  setIsModalOpen,
}: {
  match: number[];
  teams?: string[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const handleClosing = () => {
    setIsVisible(false);

    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
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
        <div className="bg-black px-5 py-3 rounded-t [&>p]:font-medium [&>p]:text-white">
          <p>Učesnici</p>
          <p>Rezultat</p>
        </div>
        <div className="bg-accent p-5">
          <p>{teams ? teams[match[0] - 1] : match[0]}</p>
          <input
            type="number"
            className="bg-black text-white h-8 w-14 px-2 text-sm rounded-sm"
          />
        </div>
        <div className="bg-accent/50 p-5 rounded-b">
          <p>{teams ? teams[match[1] - 1] : match[1]}</p>
          <input
            type="number"
            className="bg-black text-white h-8 w-14 px-2 text-sm rounded-sm"
          />
        </div>
        <button
          onClick={handleClosing}
          className="bg-background text-text text-lg font-medium italic tracking-wider mt-5 py-2 px-5 rounded-lg transition hover:bg-background/65"
        >
          Dodaj rezultat
        </button>
      </article>
    </section>
  );
};

export default ScoreModal;
