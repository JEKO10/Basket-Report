import React from "react";

const BracketField = ({
  index,
  isEvenPair,
}: {
  index: number;
  isEvenPair: boolean;
}) => {
  return (
    <article
      className={`bg-[#6EABDA] h-7 w-36 p-1 ${isEvenPair ? "mb-5" : "mb-0.5"}`}
    >
      <div className="flex justify-start items-center bg-column h-full w-full">
        <div className="bg-primary h-full w-5 flex justify-center items-center">
          <p className="text-sm text-white">{index}</p>
        </div>
        <p className="text-white pl-1 pb-0.5 tracking-wider [text-shadow:_2px_2px_1px_#222]"></p>
      </div>
    </article>
  );
};

export default BracketField;
