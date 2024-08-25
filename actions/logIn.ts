"use server";

import { AuthError } from "next-auth";
import * as z from "zod";

import { signIn } from "@/auth/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";

export const logIn = async (formData: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(formData);

  if (!validateFields.success) {
    return { error: "Nevažeća polja!" };
  }
  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Pogrešni podaci!" };
        default:
          return { error: "Nešto je pošlo po zlu!" };
      }
    }

    throw error;
  }
};
