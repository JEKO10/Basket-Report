"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { LuDoorClosed, LuDoorOpen } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { PiUserLight } from "react-icons/pi";
import * as z from "zod";

import { register as registerAction } from "@/actions/register";
import { RegisterSchema } from "@/schemas";

import Form from "../components/Form";
import FormField from "../components/FormField";

const RegisterPage = () => {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      registerAction(values).then((data) => {
        if (data.error) setMessage(data.error);
        if (data.success) {
          setMessage(data.success);
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        }
      });
    });
  };

  return (
    <Form label="Napravi nalog">
      <form
        className="flex items-start justify-center flex-col bg-accent mt-2 px-5 sm:px-8 pt-7 pb-5 rounded-lg [&>p]:-mt-2 [&>p]:mb-3 [&>p]:text-red-500"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          label="Korisničko ime"
          type="text"
          registration={register("username")}
          placeholder="Unesi korisničko ime"
          icon={<PiUserLight />}
        />
        <p>{errors.username?.message}</p>
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
          href="/login"
          className="text-md italic font-medium text-[#6eabda] underline -mt-1"
        >
          Već imate nalog?
        </Link>
        <button
          type="submit"
          className="flex items-center justify-between bg-primary mt-8 w-full text-text text-lg py-2 px-3 rounded-md transition hover:bg-primary/65"
          disabled={isPending}
        >
          <span className="text-sm font-medium">Prijavi se</span>
          <LuDoorOpen />
        </button>
        {message && <p className="!mt-2 !text-white">{message}</p>}
      </form>
    </Form>
  );
};

export default RegisterPage;
