"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PiTrashBold } from "react-icons/pi";
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

  const deleteTournament = async (id: string) => {
    try {
      await axios.delete(`/api/tournaments?id=${id}`);

      getAllTournaments();
    } catch (error) {
      console.error("Error deleting tournaments:", error);
    }
  };

  useEffect(() => {
    getAllTournaments();
  }, []);

  if (tournaments.length === 0) {
    return (
      <div>
        <Navbar />
        <article className="my-10">
          <h2 className="font-lusitana text-3xl my-8">Vaši turniri</h2>
          <p className="text-xl italic font-medium mb-6">
            Još uvijek nemate ni jedan turnir!
          </p>
          <Link
            href="/new"
            className="flex justify-center align-center w-max bg-green-600 text-md italic font-medium p-3 rounded-lg cursor-pointer hover:bg-primary"
          >
            Napravite svoj prvi turnir!
          </Link>
        </article>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <article>
        <h2 className="font-lusitana text-3xl my-10">Vaši turniri</h2>
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
            <PiTrashBold
              className="text-3xl text-red-500"
              onClick={() => deleteTournament(tournament.tournamentId)}
            />
          </div>
        ))}
      </article>
    </div>
  );
};

export default ProfilePage;
