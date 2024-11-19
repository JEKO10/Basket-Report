import Image, { StaticImageData } from "next/image";
import React from "react";

import { TournamentProps } from "@/schemas/index";

interface TournamentTypeProps extends TournamentProps {
  title: string;
  index: number;
  imgSrc: StaticImageData;
  imgAlt: string;
  desc: string;
}

const TournamentType = ({
  title,
  index,
  imgSrc,
  imgAlt,
  desc,
  formData,
  setFormData,
}: TournamentTypeProps) => {
  const handleFormatClick = () => {
    setFormData({
      ...formData,
      tournamentType: index,
    });
  };

  return (
    <article
      className={`flex items-center justify-start flex-col bg-accent h-[30rem] w-80 py-4 px-8 border-2 rounded-lg cursor-pointer hover:border-[#6EABDA] ${
        formData.tournamentType === index
          ? "border-[#6EABDA]"
          : "border-transparent"
      }`}
      onClick={handleFormatClick}
    >
      <h2 className="text-xl font-semibold pt-2">{title}</h2>
      <Image
        src={imgSrc}
        alt={imgAlt}
        height={200}
        width={200}
        className="my-12"
      />
      <p className="text-center sm:text-start text-lg">{desc}</p>
    </article>
  );
};

export default TournamentType;
