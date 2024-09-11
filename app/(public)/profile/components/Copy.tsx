"use client";

import React, { useState } from "react";

const CopyContainer = ({ username }: { username: string | undefined }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="flex justify-start items-end">
      <button
        className="uppercase bg-background text-text text-sm font-medium tracking-wider w-max mt-2 px-3 py-1 rounded-lg transition hover:bg-primary"
        onClick={() => {
          navigator.clipboard.writeText(
            `http://localhost:3000/users/${username}`
          );
          handleCopy();
        }}
      >
        Kopiraj URL profila
      </button>
      <div
        className={`flex justify-center items-center bg-accent w-fit h-7 mx-3 px-3 border-2 tracking-wider border-[#6EABDA] rounded-md transition-all duration-300 transform ${
          isCopied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"
        }`}
      >
        <p className="text-sm italic">Link kopiran</p>
      </div>
    </div>
  );
};

export default CopyContainer;
