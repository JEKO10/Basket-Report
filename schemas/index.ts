import { UseFormRegister } from "react-hook-form";
import * as z from "zod";

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
      message: "Ime mora da sadrži najmanje 3 slova!",
    }),
  participants: z.number().min(2),
  teams: z.string(),
  thirdPlace: z.boolean(),
  randomize: z.boolean(),
});

export interface TournamentProps {
  formData: z.infer<typeof TournamentSchema>;
  setFormData: React.Dispatch<
    React.SetStateAction<z.infer<typeof TournamentSchema>>
  >;
  register: UseFormRegister<z.infer<typeof TournamentSchema>>;
}
