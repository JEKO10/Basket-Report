import React from "react";
import { LuDoorClosed } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";

import Form from "@/components/authForm/Form";
import FormField from "@/components/authForm/FormField";

const LogInPage = () => {
  return (
    <Form label="Prijavi se">
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

export default LogInPage;
