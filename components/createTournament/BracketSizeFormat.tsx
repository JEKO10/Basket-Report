"use client";

import React, { useRef, useState } from "react";
import { PiMinus, PiPlus } from "react-icons/pi";
import * as z from "zod";

import { TournamentSchema } from "@/schemas";

const BracketSizeFormat = ({
  isBlank,
  participants,
  setParticipants,
  setTeams,
  formData,
  setFormData,
}: {
  isBlank: boolean;
  participants: number;
  setParticipants: React.Dispatch<React.SetStateAction<number>>;
  setTeams: React.Dispatch<React.SetStateAction<string>>;
  formData: z.infer<typeof TournamentSchema>;
  setFormData: React.Dispatch<
    React.SetStateAction<z.infer<typeof TournamentSchema>>
  >;
}) => {
  const [content, setContent] = useState<string>("");
  const scrollRef = useRef<HTMLTextAreaElement>(null);

  const getLineNumbers = () => {
    const lines = content.split("\n");
    let lineCount = 0;

    return lines
      .map((line) => {
        if (line.trim() !== "") {
          lineCount += 1;
          return `${lineCount}.`;
        }
        return "";
      })
      .join("\n");
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const syncScroll = () => {
    if (scrollRef.current) {
      const scrollTop = scrollRef.current.scrollTop;
      const lineNumberDiv = document.getElementById("line-numbers");
      if (lineNumberDiv) {
        lineNumberDiv.scrollTop = scrollTop;
      }
    }
  };

  if (isBlank) {
    return (
      <section>
        <p className="text-2xl italic font-medium">Unesite broj učesnika</p>
        <article className="flex items-center justify-start my-5">
          <button
            type="button"
            className="bg-primary px-5 cursor-pointer rounded-l-md"
            onClick={() => setParticipants(participants - 1)}
            disabled={participants === 2}
          >
            <PiMinus className="text-text h-8 text-xl" />
          </button>
          <div className="bg-accent w-48 p-1 flex items-center justify-center">
            <input
              className="bg-accent w-full text-center outline-none"
              type="number"
              onChange={(event) =>
                setParticipants(parseInt(event.target.value))
              }
              value={participants}
              min={2}
              max={256}
            />
          </div>
          <button
            type="button"
            className="bg-primary px-5 cursor-pointer rounded-r-md"
            onClick={() => setParticipants(participants + 1)}
            disabled={participants === 256}
          >
            <PiPlus className="text-text h-8 text-xl" />
          </button>
        </article>
      </section>
    );
  }
  return (
    <article>
      <p className="text-2xl italic font-medium">Učesnici</p>
      <p className="italic mt-2">
        Jedan ispod drugog, od najboljeg ka najlošijem
      </p>
      <textarea
        value={getLineNumbers()}
        readOnly
        id="line-numbers"
        className="bg-primary resize-none overflow-hidden h-60 w-8 my-2 py-2 pl-2 text-text text-base rounded-l-md"
      />
      <textarea
        value={content}
        onChange={(event) => {
          handleChange(event);
          setTeams(event.target.value);
        }}
        ref={scrollRef}
        onScroll={syncScroll}
        className="bg-primary text-base text-text w-full md:w-1/2 h-60 my-2 py-2 px-3 resize-none rounded-r-md outline-none placeholder-text"
        placeholder="Unesite učesnike, jedan učesnik ispod drugog"
      />
      <label className="flex align-center justify-start flex-col w-fit">
        <div className="flex align-center justify-start cursor-pointer">
          <input
            type="checkbox"
            className="w-5 mr-3"
            onChange={(event) =>
              setFormData({ ...formData, randomize: event.target.checked })
            }
          />
          <p className="text-base opacity-65 italic select-none">
            Nasumično rasporedi takmičare
          </p>
        </div>
      </label>
    </article>
  );
};

export default BracketSizeFormat;
