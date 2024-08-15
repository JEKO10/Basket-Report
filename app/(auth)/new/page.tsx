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
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
          setSuccess("Uspješno napravljen turnir!");
          router.push("/profile");
        } else {
          setError(response.data.error);
        }
      } catch (error) {
        setError("Došlo je do greške, pokušajte ponovo.");
      }
    });
  };

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError("");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [error]);

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
        <div>
          <Name
            formData={formData}
            setFormData={setFormData}
            register={register}
          />
        </div>
      )}
      <div className={`my-5 ${page === 1 && "ml-6"} h-6`}>
        {error && (
          <p className="text-xl text-red-600 italic font-medium">{error}</p>
        )}
        {success && (
          <p className="text-xl text-green-600 italic font-medium">{success}</p>
        )}
      </div>
      <ControlButtons
        page={page}
        setPage={setPage}
        formData={formData}
        setFormData={setFormData}
        setError={setError}
        isPending={isPending}
      />
    </form>
  );
};

export default NewPage;
