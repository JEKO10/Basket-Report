import * as z from "zod";

import { RegisterSchema } from "@/schemas";

export const register = async (formData: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(formData);

  if (!validateFields) {
    return { message: "Invalid fields!" };
  }

  return { message: "User created!" };
};
