import React from "react";

import TournamentType from "@/components/createTournament/TournamentType";
import double from "@/public/double.png";
import roundRobin from "@/public/robin.png";
import single from "@/public/single.png";
import { TournamentProps } from "@/schemas";

const TournamentForm = ({ formData, setFormData }: TournamentProps) => {
  return (
    <div>
      <section className="flex items-center justify-around mt-10 mb-5">
        <TournamentType
          index={1}
          title="Jedna eliminacija"
          imgSrc={single}
          imgAlt="singleElimination"
          desc="Klasični format turnira. Poraženi u svakom meču biće odmah eliminisani sa turnira."
          formData={formData}
          setFormData={setFormData}
        />
        <TournamentType
          index={2}
          title="Dvije eliminacija"
          imgSrc={double}
          imgAlt="doubleElimination"
          desc="Učesnik se eliminiše nakon što izgubi dva meča."
          formData={formData}
          setFormData={setFormData}
        />
        <TournamentType
          index={3}
          title="Svako sa svakim"
          imgSrc={roundRobin}
          imgAlt="roundRobin"
          desc="Svaki učesnik se sastaje sa svim ostalim učesnicima redom."
          formData={formData}
          setFormData={setFormData}
        />
      </section>
      <article className="mt-16 px-5">
        <h2 className="text-2xl mb-4 italic font-medium">
          Važi za format sa jednom eliminacijom
        </h2>
        <label className="flex align-center justify-start flex-col">
          <div className="flex align-center justify-start cursor-pointer">
            <input
              type="checkbox"
              className="w-5 mr-3"
              onChange={(event) =>
                setFormData({ ...formData, thirdPlace: event.target.checked })
              }
            />
            <p className="text-base opacity-65 italic select-none">
              Dodaj meč za treće mjesto
            </p>
          </div>
        </label>
      </article>
    </div>
  );
};

export default TournamentForm;
