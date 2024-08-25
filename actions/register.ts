"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";

import db from "@/prisma/db";
import { RegisterSchema } from "@/schemas";

import { getUserByEmail, getUserByUsername } from "./user";

export const register = async (formData: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(formData);

  if (!validateFields.success) {
    return { error: "Nevažeća polja!" };
  }

  const { username, email, password } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingEmail = await getUserByEmail(email);
  const existingUsername = await getUserByUsername(username);

  if (existingEmail || existingUsername)
    return { error: "E-mail ili korisničko ime su već u upotrebi!" };

  await db.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  return { success: "Uspješno ste napravili nalog!" };
};
