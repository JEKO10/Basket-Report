"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { LuDoorClosed } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { PiUserLight } from "react-icons/pi";
import * as z from "zod";

import Form from "@/components/authForm/Form";
import FormField from "@/components/authForm/FormField";
import { RegisterSchema } from "@/schemas";

const RegisterPage = () => {
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

  return (
    <Form label="Napravi nalog" handleSubmit={handleSubmit}>
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
    </Form>
  );
};

export default RegisterPage;
