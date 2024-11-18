"use client";

import React from "react";
import { PiTrashBold } from "react-icons/pi";

type DeleteButtonProps = {
  tournamentId: string;
  // eslint-disable-next-line no-unused-vars
  onDelete: (id: string) => void;
};

const DeleteButton = ({ tournamentId, onDelete }: DeleteButtonProps) => {
  return (
    <PiTrashBold
      className="text-2xl md:text-3xl text-red-500 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        e.nativeEvent.preventDefault();
        onDelete(tournamentId);
      }}
    />
  );
};

export default DeleteButton;
