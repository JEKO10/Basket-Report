"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";

import db from "@/prisma/db";
import { LoginSchema } from "@/schemas";

export const logIn = async (formData: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(formData);

  if (!validateFields.success) {
    return { error: "Nevažeća polja!" };
  }
  const { email, password } = validateFields.data;

  const user = await db.user.findUnique({
    where: { email },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return { error: "Pogrešni podaci!" };
  }

  return { success: "Dobrodošli!" };
};
