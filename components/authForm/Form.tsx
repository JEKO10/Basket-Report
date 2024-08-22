"use client";

import Link from "next/link";
import React, { useState, useTransition } from "react";
import { UseFormHandleSubmit } from "react-hook-form";
import { LuDoorOpen } from "react-icons/lu";
import * as z from "zod";

import { register } from "@/actions/register";
import { RegisterSchema } from "@/schemas";

type FormAuthProps = {
  label: string;
  handleSubmit: UseFormHandleSubmit<
    {
      username: string;
      email: string;
      password: string;
    },
    undefined
  >;
  children: React.ReactNode;
};

const FormAuth = ({ label, handleSubmit, children }: FormAuthProps) => {
  const [message, setMessage] = useState("");
  const [_, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      register(values).then((data) => {
        if (data.error) setMessage(data.error);
        if (data.success) setMessage(data.success);
      });
    });
  };

  return (
    <div className="max-w-sm mx-auto my-10">
      <header className="flex items-end justify-start font-lusitana bg-primary px-6 py-4 h-36 rounded-lg">
        <p className="text-4xl text-white">{label}</p>
      </header>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-start justify-center flex-col bg-accent mt-2 px-8 pt-7 pb-5 rounded-lg"
      >
        {children}
        <Link
          href={`${label === "Prijavi se" ? "/register" : "/login"}`}
          className="text-md italic font-medium text-[#6eabda] underline -mt-1"
        >
          {label === "Prijavi se"
            ? "Nemate nalog? Napravite jedan odmah..."
            : "Već imate nalog?"}
        </Link>
        <button
          type="submit"
          className="flex items-center justify-between bg-primary mt-8 w-full text-text text-lg py-2 px-3 rounded-md transition hover:bg-primary/65"
        >
          <span className="text-sm font-medium">
            {label === "Prijavi se" ? "Prijavi se" : "Napravi nalog"}
          </span>
          <LuDoorOpen />
        </button>
        <p>{message && message}</p>
      </form>
    </div>
  );
};

export default FormAuth;
