"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { LuDoorClosed } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import * as z from "zod";

import Form from "@/components/authForm/Form";
import FormField from "@/components/authForm/FormField";
import { LoginSchema } from "@/schemas";

const LogInPage = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <Form label="Prijavi se" handleSubmit={handleSubmit}>
      <FormField
        label="E-mail"
        type="email"
        {...register("email")}
        placeholder="Unesi e-mail adresu"
        icon={<MdAlternateEmail />}
      />
      <p>{errors.email?.message}</p>
      <FormField
        label="Šifra"
        type="password"
        {...register("password")}
        placeholder="Unesi šifru"
        icon={<LuDoorClosed />}
      />
      <p>{errors.password?.message}</p>
    </Form>
  );
};

export default LogInPage;
