import React from "react";
import * as z from "zod";

import { TournamentSchema } from "@/schemas";

import ParticipantsFormat from "./ParticipantsFormat";

interface BracketSizeProps {
  formData: z.infer<typeof TournamentSchema>;
  setFormData: React.Dispatch<
    React.SetStateAction<z.infer<typeof TournamentSchema>>
  >;
}

const BracketSize = ({ formData, setFormData }: BracketSizeProps) => {
  return (
    <section className="my-6">
      <h3 className="text-2xl mb-4 italic font-medium">
        Izaberite način dodavanja ekipa
      </h3>
      <article className="my-10">
        <button
          type="button"
          className={`bg-accent mr-5 py-3 px-5 border-4 rounded-lg hover:border-[#6EABDA] ${
            !formData.bracketSize ? "border-[#6EABDA]" : "border-transparent"
          }`}
          onClick={() => setFormData({ ...formData, bracketSize: false })}
        >
          Unesite imena timova, od najboljeg ka najlošijem
        </button>
        <button
          type="button"
          className={`bg-primary text-text mr-5 py-3 px-5 border-4 rounded-lg hover:border-[#f08953] ${
            formData.bracketSize ? "border-[#f08953]" : "border-transparent"
          }`}
          onClick={() => setFormData({ ...formData, bracketSize: true })}
        >
          Unesite broj i generišite prazan kostur
        </button>
      </article>
      <ParticipantsFormat
        isBlank={formData.bracketSize}
        formData={formData}
        setFormData={setFormData}
      />
    </section>
  );
};

export default BracketSize;
