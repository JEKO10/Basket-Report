"use client";

import React, { useState } from "react";
import { PiMinus, PiPlus } from "react-icons/pi";

const BracketSize = () => {
  const [isBlank, setIsBlank] = useState(false);
  const [participants, setParticipants] = useState(2);

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
          onClick={() => setIsBlank(false)}
        >
          Unesite imena timova, od najboljeg ka najlošijem
        </button>
        <button
          className={`bg-primary text-text mr-5 py-3 px-5 border-4 rounded-lg hover:border-[#f08953] ${
            isBlank ? "border-[#f08953]" : "border-transparent"
          }`}
          onClick={() => setIsBlank(true)}
        >
          Unesite broj i generišite prazan kostur
        </button>
      </article>
      {isBlank ? (
        <section>
          <p className="text-2xl italic font-medium">Unesite broj učesnika</p>
          <article className="flex items-center justify-start my-5">
            <button
              className="bg-primary px-5 cursor-pointer"
              onClick={() => setParticipants(participants - 1)}
              disabled={participants === 2}
            >
              <PiMinus className="text-text h-8 text-xl" />
            </button>
            <div className="bg-accent w-48 p-1 flex items-center justify-center">
              <p className="select-none">{participants}</p>
            </div>
            <button
              className="bg-primary px-5 cursor-pointer"
              onClick={() => setParticipants(participants + 1)}
            >
              <PiPlus className="text-text h-8 text-xl" />
            </button>
          </article>
        </section>
      ) : (
        <article>
          <p className="text-2xl italic font-medium">Učesnici</p>
          <p className="italic mt-2">
            Jedan ispod drugog, od najboljeg ka najlošijem
          </p>
          <textarea
            className="bg-primary text-base w-1/2 h-60 my-2 py-4 px-5 resize-none rounded-md outline-none"
            name="participants"
            placeholder="Unesite učesnike"
          />
          <label className="flex align-center justify-start flex-col">
            <div className="flex align-center justify-start cursor-pointer">
              <input type="checkbox" name="thirdPlace" className="w-5 mr-3" />
              <p className="text-base opacity-65 italic select-none">
                Nasumično rasporedi takmičare
              </p>
            </div>
          </label>
        </article>
      )}
    </section>
  );
};

export default BracketSize;
