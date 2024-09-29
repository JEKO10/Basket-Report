import React, { useEffect, useRef, useState } from "react";

const ScoreModal = ({
  match,
  setIsModalOpen,
}: {
  match: number[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setIsVisible(false);

        setTimeout(() => {
          setIsModalOpen(false);
        }, 500);
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
          <p>{match[0]}</p>
          <input
            type="number"
            className="bg-black text-white h-8 w-14 px-2 text-sm rounded-sm"
          />
        </div>
        <div className="bg-accent/50 p-5 rounded-b">
          <p>{match[1]}</p>
          <input
            type="number"
            className="bg-black text-white h-8 w-14 px-2 text-sm rounded-sm"
          />
        </div>
      </article>
    </section>
  );
};

export default ScoreModal;
