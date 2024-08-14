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
    .min(3),
  participants: z.number().min(2),
  teams: z.string(),
  thirdPlace: z.boolean(),
  randomize: z.boolean(),
});
