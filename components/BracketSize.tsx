import React, { useState } from "react";

import { TournamentProps } from "@/schemas";

import ParticipantsFormat from "./ParticipantsFormat";
const BracketSize = ({ formData, setFormData, register }: TournamentProps) => {
  const [isBlank, setIsBlank] = useState(false);

  const handleSizeSelect = (size: boolean) => {
    setFormData({ ...formData, bracketSize: size });

    setIsBlank(size);
  };

  return (
    <section className="my-6">
      <h3 className="text-2xl mb-4 italic font-medium">
        Izaberite način dodavanja ekipa
      </h3>
      <article className="my-10">
        <button
          className={`bg-accent mr-5 py-3 px-5 border-4 rounded-lg hover:border-[#6EABDA] ${
            !isBlank ? "border-[#6EABDA]" : "border-transparent"
          }`}
          onClick={() => handleSizeSelect(false)}
        >
          Unesite imena timova, od najboljeg ka najlošijem
        </button>
        <button
          className={`bg-primary text-text mr-5 py-3 px-5 border-4 rounded-lg hover:border-[#f08953] ${
            isBlank ? "border-[#f08953]" : "border-transparent"
          }`}
          onClick={() => handleSizeSelect(true)}
        >
          Unesite broj i generišite prazan kostur
        </button>
      </article>
      <ParticipantsFormat
        isBlank={isBlank}
        formData={formData}
        setFormData={setFormData}
        register={register}
      />
    </section>
  );
};

export default BracketSize;
