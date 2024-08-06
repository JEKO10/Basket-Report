import React from "react";
import { LuDoorClosed, LuDoorOpen } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";

import Form from "@/components/authForm/Form";
import FormField from "@/components/authForm/FormField";

const LogInPage = () => {
  return (
    <Form label="Prijavi se">
      <FormField
        label="Email"
        type="email"
        name="email"
        placeholder="Unesi email adresu"
        icon={<MdAlternateEmail />}
      />
      <FormField
        label="Šifra"
        type="password"
        name="password"
        placeholder="Unesi šifru"
        icon={<LuDoorClosed />}
      />
      <button
        type="submit"
        className="flex items-center justify-between bg-primary w-full text-text text-lg py-2 px-3 rounded-md transition hover:bg-primary/65"
      >
        <span className="text-sm font-medium">Prijavi se</span>
        <LuDoorOpen />
      </button>
    </Form>
  );
};

export default LogInPage;
