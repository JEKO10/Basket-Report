"use client";

import React from "react";

const CopyButton = ({ username }: { username: string | undefined }) => {
  return (
    <button
      className="uppercase bg-background text-text text-sm font-medium tracking-wider w-max mt-2 px-3 py-1 rounded-lg transition hover:bg-primary"
      onClick={() => {
        navigator.clipboard.writeText(
          `http://localhost:3000/users/${username}`
        );
      }}
    >
      Kopiraj URL profila
    </button>
  );
};

export default CopyButton;
