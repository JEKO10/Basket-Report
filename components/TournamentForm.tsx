import Image from "next/image";
import React from "react";

import double from "@/public/double.png";
import robin from "@/public/robin.png";
import single from "@/public/single.png";
import { TournamentProps } from "@/schemas";

const TournamentForm = ({
  formData,
  setFormData,
  register,
}: TournamentProps) => {
  const handleFormatClick = (index: number) => {
    setFormData({
      ...formData,
      tournamentType: index,
    });
  };

  return (
    <div>
      <section className="flex items-center justify-around mt-10 mb-5">
        <article
          className={`flex items-center justify-start flex-col bg-accent h-[30rem] w-80 py-4 px-8 border-2 rounded-lg cursor-pointer hover:border-[#6EABDA] ${
            formData.tournamentType === 1
              ? "border-[#6EABDA]"
              : "border-transparent"
          }`}
          onClick={() => handleFormatClick(1)}
        >
          <h2 className="text-xl font-semibold pt-2">Jedna eliminacija</h2>
          <Image
            src={single}
            alt="jednaElim"
            height={200}
            width={200}
            className="my-12"
          />
          <p className="text-left text-lg">
            Klasični format turnira. Poraženi u svakom meču biće odmah
            eliminisani sa turnira.
          </p>
        </article>
        <article
          className={`flex items-center justify-start flex-col bg-accent h-[30rem] w-80 py-4 px-8 border-2 rounded-lg cursor-pointer hover:border-[#6EABDA] ${
            formData.tournamentType === 2
              ? "border-[#6EABDA]"
              : "border-transparent"
          }`}
          onClick={() => handleFormatClick(2)}
        >
          <h2 className="text-xl font-semibold pt-2">Dvije eliminacija</h2>
          <Image
            src={double}
            alt="duplaElim"
            height={200}
            width={200}
            className="my-12"
          />
          <p className="text-left text-lg">
            Učesnik se eliminiše nakon što izgubi dva meča.
          </p>
        </article>
        <article
          className={`flex items-center justify-start flex-col bg-accent h-[30rem] w-80 py-4 px-8 border-2 rounded-lg cursor-pointer hover:border-[#6EABDA] ${
            formData.tournamentType === 3
              ? "border-[#6EABDA]"
              : "border-transparent"
          }`}
          onClick={() => handleFormatClick(3)}
        >
          <h2 className="text-xl font-semibold pt-2">Svako sa svakim</h2>
          <Image
            src={robin}
            alt="svakoSaSvakim"
            height={200}
            width={200}
            className="my-12"
          />
          <p className="text-left text-lg">
            Svaki učesnik se sastaje sa svim ostalim učesnicima redom.
          </p>
        </article>
      </section>
      <article className="mt-16 px-5">
        <h2 className="text-2xl mb-4 italic font-medium">
          Važi za format sa jednom eliminacijom
        </h2>
        <label className="flex align-center justify-start flex-col">
          <div className="flex align-center justify-start cursor-pointer">
            <input
              type="checkbox"
              {...register("thirdPlace")}
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
