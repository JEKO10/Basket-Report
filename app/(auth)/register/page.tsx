import React from "react";
import { LuDoorClosed } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { PiUserLight } from "react-icons/pi";

import Form from "@/components/authForm/Form";
import FormField from "@/components/authForm/FormField";

const RegisterPage = () => {
  return (
    <Form label="Napravi nalog">
      <FormField
        label="Korisničko ime"
        type="text"
        name="username"
        placeholder="Unesi korisničko ime"
        icon={<PiUserLight />}
      />
      <FormField
        label="E-mail"
        type="email"
        name="email"
        placeholder="Unesi e-mail adresu"
        icon={<MdAlternateEmail />}
      />
      <FormField
        label="Šifra"
        type="password"
        name="password"
        placeholder="Unesi šifru"
        icon={<LuDoorClosed />}
      />
    </Form>
  );
};

export default RegisterPage;
