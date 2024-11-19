import React from "react";

import LastPageInput from "@/components/createTournament/LastPageInput";
import { TournamentProps } from "@/schemas/index";

const LastPage = ({ formData, setFormData }: TournamentProps) => {
  return (
    <section className="flex justify-center md:justify-start items-center flex-col sm:flex-row gap-10 lg:gap-20 my-6 flex-wrap">
      <LastPageInput
        formData={formData}
        setFormData={setFormData}
        label="Unesite ime turnira"
        type="text"
        placeholder="Ime turnira..."
        field="tournamentName"
      />
      <LastPageInput
        formData={formData}
        setFormData={setFormData}
        label="Unesite sport"
        type="text"
        placeholder="Sport turnira..."
        field="tournamentSport"
      />
      <LastPageInput
        formData={formData}
        setFormData={setFormData}
        label="Datum početka turnira"
        type="date"
        placeholder="Datum početka turnira..."
        field="tournamentDate"
      />
    </section>
  );
};

export default LastPage;
