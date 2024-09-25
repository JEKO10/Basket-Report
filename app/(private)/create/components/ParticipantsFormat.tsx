"use client";

import React, { useEffect, useState } from "react";
import * as z from "zod";

import BracketSizeFormat from "@/components/createTournament/BracketSizeFormat";
import { TournamentSchema } from "@/schemas";

interface ParticipantsFormatProps {
  isBlank: boolean;
  formData: z.infer<typeof TournamentSchema>;
  setFormData: React.Dispatch<
    React.SetStateAction<z.infer<typeof TournamentSchema>>
  >;
}

const ParticipantsFormat = ({
  isBlank,
  formData,
  setFormData,
}: ParticipantsFormatProps) => {
  const [participants, setParticipants] = useState(2);
  const [teams, setTeams] = useState("");

  useEffect(() => {
    const teamArray = teams
      .split("\n")
      .map((team) => team.trim())
      .filter((team) => team.length > 0);

    const uniqueTeamArray = Array.from(new Set(teamArray));

    setFormData({ ...formData, teams: uniqueTeamArray });
  }, [teams]);

  useEffect(() => {
    if (participants < 2) {
      setFormData({ ...formData, participants: 2 });
    } else if (participants > 256) {
      setFormData({ ...formData, participants: 256 });
    } else {
      setFormData({ ...formData, participants });
    }
  }, [participants]);

  return (
    <BracketSizeFormat
      isBlank={isBlank}
      participants={participants}
      setParticipants={setParticipants}
      setTeams={setTeams}
      formData={formData}
      setFormData={setFormData}
    />
  );
};

export default ParticipantsFormat;
