"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import BracketSize from "@/components/BracketSize";
import ControlButtons from "@/components/ControlButtons";
import Name from "@/components/Name";
import Navbar from "@/components/Navbar";
import TournamentForm from "@/components/TournamentForm";
import { TournamentSchema } from "@/schemas";

const NewPage = () => {
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    tournamentType: 0,
    bracketSize: false,
    tournamentName: "",
    participants: 2,
    teams: "",
    thirdPlace: false,
    randomize: false,
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof TournamentSchema>>({
    resolver: zodResolver(TournamentSchema),
    defaultValues: {
      tournamentType: 0,
      bracketSize: false,
      tournamentName: "",
      participants: 2,
      teams: "",
      thirdPlace: false,
      randomize: false,
    },
  });
  const { register, handleSubmit } = form;

  const onSubmit = async (data: z.infer<typeof TournamentSchema>) => {
    startTransition(async () => {
      try {
        const response = await axios.post("/api/tournament", data);

        if (response.data.success) {
          setMessage("Uspješno napravljen turnir!");
          router.push("/profile");
        } else {
          setMessage(response.data.error);
        }
      } catch (error) {
        setMessage("Došlo je do greške, pokušajte ponovo.");
      }
    });
  };

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage("");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [message]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Navbar />
      {page === 1 && (
        <TournamentForm
          formData={formData}
          setFormData={setFormData}
          register={register}
        />
      )}
      {page === 2 && (
        <BracketSize
          formData={formData}
          setFormData={setFormData}
          register={register}
        />
      )}
      {page === 3 && (
        <Name
          formData={formData}
          setFormData={setFormData}
          register={register}
        />
      )}
      <div className={`my-5 ${page === 1 && "ml-6"} h-6`}>
        <p className="text-xl text-red-600 italic font-medium">{message}</p>
      </div>
      <ControlButtons
        page={page}
        setPage={setPage}
        formData={formData}
        setFormData={setFormData}
        setMessage={setMessage}
        isPending={isPending}
      />
    </form>
  );
};

export default NewPage;
