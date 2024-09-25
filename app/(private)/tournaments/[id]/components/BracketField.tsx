import React from "react";

const BracketField = ({
  match,
  teamName,
}: {
  match: number | null;
  teamName?: string | null;
}) => {
  return (
    <article className="bg-[#6EABDA] h-7 w-36 p-1 relative mb-0.5">
      <div className="flex justify-start items-center bg-column h-full w-full overflow-hidden">
        {teamName && teamName?.length > 15 && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#6EABDA] to-[120%]" />
        )}
        <div className="bg-primary h-full min-w-5 flex justify-center items-center">
          <p className="text-sm text-white select-none">{match}</p>
        </div>
        <p className="text-white pl-1 pb-0.5 tracking-wider [text-shadow:_2px_2px_1px_#222]">
          {teamName}
        </p>
      </div>
    </article>
  );
};

export default BracketField;
