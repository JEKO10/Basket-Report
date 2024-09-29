import React from "react";

const ScoreModal = ({ match }: { match: number[] }) => {
  return (
    <section className="flex justify-center items-center bg-black/70 fixed top-0 left-0 h-full w-full z-10">
      <article className="flex justify-center items-start flex-col bg-primary h-96 w-1/2 p-10 rounded [&>div]:flex [&>div]:justify-between [&>div]:items-center [&>div]:w-full">
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
