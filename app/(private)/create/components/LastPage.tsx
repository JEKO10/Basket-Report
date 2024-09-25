import React from "react";

import LastPageInput from "@/components/createTournament/LastPageInput";
import { TournamentProps } from "@/schemas/index";

const LastPage = ({ formData, setFormData }: TournamentProps) => {
  return (
    <section className="flex justify-start items-center my-6">
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
