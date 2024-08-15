import React from "react";
import { UseFormRegister } from "react-hook-form";
import * as z from "zod";

import { TournamentSchema } from "@/schemas";

const Name = ({
  formData,
  setFormData,
  register,
}: {
  formData: z.infer<typeof TournamentSchema>;
  setFormData: React.Dispatch<
    React.SetStateAction<z.infer<typeof TournamentSchema>>
  >;
  register: UseFormRegister<z.infer<typeof TournamentSchema>>;
}) => {
  return (
    <div className="my-6">
      <h3 className="text-2xl mb-4 italic font-medium">Unesite ime turnira</h3>
      <input
        type="text"
        {...register("tournamentName")}
        placeholder="Ime turnira"
        onChange={(event) =>
          setFormData({ ...formData, tournamentName: event.target.value })
        }
        className="name bg-primary text-lg text-text w-52 px-3 py-2 border-2 border-transparent rounded-md outline-none focus:border-accent focus:border-2 placeholder-white"
      />
    </div>
  );
};

export default Name;
