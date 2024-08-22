import * as z from "zod";

export interface TournamentProps {
  formData: z.infer<typeof TournamentSchema>;
  setFormData: React.Dispatch<
    React.SetStateAction<z.infer<typeof TournamentSchema>>
  >;
}

export const TournamentSchema = z.object({
  tournamentType: z.number({
    message: "Format je obavezan!",
  }),
  bracketSize: z.boolean(),
  tournamentName: z
    .string({
      message: "Ime je obavezno!",
    })
    .min(3, {
      message: "Minimum 3 slova!",
    }),
  participants: z.number().min(2),
  teams: z.array(z.string()),
  thirdPlace: z.boolean(),
  randomize: z.boolean(),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email je obavezan!",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 slova!",
  }),
});

export const RegisterSchema = z.object({
  username: z.string().min(3, {
    message: "Minimum 3 slova!",
  }),
  email: z.string().email({
    message: "Email je obavezan!",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 slova!",
  }),
});
