"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { LuDoorClosed, LuDoorOpen } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import * as z from "zod";

import { logIn } from "@/actions/logIn";
import Form from "@/components/authForm/Form";
import FormField from "@/components/authForm/FormField";
import { LoginSchema } from "@/schemas";

const LogInPage = () => {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      logIn(values).then((data) => {
        if (data.error) setMessage(data.error);
        if (data.success) setMessage(data.success);
      });
    });
  };

  return (
    <Form label="Prijavi se">
      <form
        className="flex items-start justify-center flex-col bg-accent mt-2 px-8 pt-7 pb-5 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          label="E-mail"
          type="email"
          registration={register("email")}
          placeholder="Unesi e-mail adresu"
          icon={<MdAlternateEmail />}
        />
        <p>{errors.email?.message}</p>
        <FormField
          label="Šifra"
          type="password"
          registration={register("password")}
          placeholder="Unesi šifru"
          icon={<LuDoorClosed />}
        />
        <p>{errors.password?.message}</p>
        <Link
          href="/register"
          className="text-md italic font-medium text-[#6eabda] underline -mt-1"
        >
          Nemate nalog? Napravite jedan odmah...
        </Link>
        <button
          type="submit"
          className="flex items-center justify-between bg-primary mt-8 w-full text-text text-lg py-2 px-3 rounded-md transition hover:bg-primary/65"
          disabled={isPending}
        >
          <span className="text-sm font-medium">Prijavi se</span>
          <LuDoorOpen />
        </button>
        {message && <p>{message}</p>}
      </form>
    </Form>
  );
};

export default LogInPage;
