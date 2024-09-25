import React from "react";

import { TournamentProps } from "@/schemas";

interface LastPageInputProps extends TournamentProps {
  label: string;
  placeholder: string;
  type: string;
  field: string;
}

const LastPageInput = ({
  formData,
  setFormData,
  label,
  placeholder,
  type,
  field,
}: LastPageInputProps) => {
  return (
    <article className="flex flex-col mr-20">
      <label className="text-2xl mb-4 italic font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="name bg-primary text-lg text-text w-52 px-3 py-2 border-2 border-transparent rounded-md outline-none focus:border-accent focus:border-2 placeholder-white"
        onChange={(event) =>
          setFormData({
            ...formData,
            [field]:
              event.target.value.charAt(0).toUpperCase().trim() +
              event.target.value.slice(1),
          })
        }
      />
    </article>
  );
};

export default LastPageInput;
