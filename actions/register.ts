"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";

import db from "@/prisma/db";
import { RegisterSchema } from "@/schemas";

export const register = async (formData: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(formData);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { username, email, password } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  return { success: "User created!" };
};
