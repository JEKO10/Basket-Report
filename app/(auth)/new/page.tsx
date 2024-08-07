import Image from "next/image";
import React from "react";

import Navbar from "@/components/Navbar";
import single from "@/public/single.png";

const NewPage = () => {
  return (
    <div>
      <Navbar />
      <section className="flex items-center justify-between">
        <article className="flex items-center justify-start flex-col bg-accent h-96 w-80 py-4 px-8 my-5 rounded-lg cursor-pointer">
          <h2 className="text-xl font-semibold pt-2">Jedna eliminacija</h2>
          <Image
            src={single}
            alt="single"
            height={200}
            width={200}
            className="my-12"
          />
          <p className="text-left text-lg">
            Klasični format turnira. Poraženi u svakom meču biće odmah
            eliminisani sa turnira.
          </p>
        </article>
        <article className="flex items-center justify-start flex-col bg-accent h-96 w-80 py-4 px-8 my-5 rounded-lg cursor-pointer">
          <h2 className="text-xl font-semibold pt-2">Dvije eliminacija</h2>
          <Image
            src={single}
            alt="single"
            height={200}
            width={200}
            className="my-12"
          />
          <p className="text-left text-lg">
            Učesnik se eliminiše nakon što izgubi dve utakmice ili meča.
          </p>
        </article>
        <article className="flex items-center justify-start flex-col bg-accent h-96 w-80 py-4 px-8 my-5 rounded-lg cursor-pointer">
          <h2 className="text-xl font-semibold pt-2">Svako sa svakim</h2>
          <Image
            src={single}
            alt="single"
            height={200}
            width={200}
            className="my-12"
          />
          <p className="text-left text-lg">
            Svaki učesnik se sastaje sa svim ostalim učesnicima redom.
          </p>
        </article>
      </section>
    </div>
  );
};

export default NewPage;
