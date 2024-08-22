import * as z from "zod";

import { LoginSchema } from "@/schemas";

export const logIn = async (formData: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(formData);

  if (!validateFields) {
    return { message: "Invalid fields!" };
  }

  return { message: "Logged in!" };
};
