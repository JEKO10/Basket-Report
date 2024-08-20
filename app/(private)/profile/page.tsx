"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import * as z from "zod";

import Navbar from "@/components/Navbar";
import { TournamentSchema } from "@/schemas";

const ExtendedSchema = TournamentSchema.extend({
  tournamentId: z.string(),
  createdAt: z.string(),
});

const ProfilePage = () => {
  const [tournaments, setTournaments] = useState<
    z.infer<typeof ExtendedSchema>[]
  >([]);

  const getAllTournaments = async () => {
    try {
      const response = await axios.get("/api/tournaments");

      setTournaments(response.data.data);
    } catch (error) {
      console.error("Error fetching tournaments:", error);
    }
  };

  useEffect(() => {
    getAllTournaments();
  }, []);

  return (
    <div>
      <Navbar />
      <article>
        <h2 className="font-lusitana text-text text-3xl my-10">Vaši turniri</h2>
        {tournaments.map((tournament) => (
          <div
            key={tournament.tournamentId}
            className="flex justify-between align-center bg-background text-text text-xl italic font-medium my-10 px-10 py-4 rounded-lg cursor-pointer hover:bg-primary"
          >
            <p>Ime: {tournament.tournamentName}</p>
            <p>Format: {tournament.tournamentType}</p>
            <p>
              Učesnici:{" "}
              {tournament.teams.length === 0
                ? tournament.participants
                : tournament.teams.length}
            </p>
            <p>Meč za treće mjesto: {tournament.thirdPlace ? "Da" : "Ne"}</p>
            <p>Napravljeno: {tournament.createdAt.slice(5, 10)}</p>
          </div>
        ))}
      </article>
    </div>
  );
};

export default ProfilePage;
