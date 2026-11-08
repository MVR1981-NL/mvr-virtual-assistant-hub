import { z } from "zod";

export const requestTypes = ["check", "capaciteit", "vraag"] as const;
export type RequestType = typeof requestTypes[number];
export const interestOptions = ["Documenten & dossiers", "Import & export", "Orders, zendingen & data-entry", "Pieken & achterstand", "FLEX 10", "FLEX 20", "FLEX 25", "Sprint"] as const;
export const contactSearchSchema = z.object({
  type: z.enum(requestTypes).optional(),
  interest: z.enum(interestOptions).optional(),
});
export const leadSchema = z.object({
  request_type: z.enum(requestTypes),
  name: z.string().trim().min(1, "Vul je naam in").max(100),
  email: z.string().trim().email("Vul een geldig e-mailadres in").max(255),
  company: z.string().trim().max(150).nullable(),
  phone: z.string().trim().max(30).nullable(),
  message: z.string().trim().min(1, "Vertel kort waar je hulp bij zoekt").max(2000),
  interest: z.enum(interestOptions).optional(),
  timing: z.enum(["In overleg", "Zo snel mogelijk", "Binnen een maand", "Later / oriënterend"]).optional(),
  website: z.string().max(0, "Versturen lukte niet").optional(),
});
export const checklistSchema = z.object({
  name: z.string().trim().min(1, "Vul je naam in").max(100),
  email: z.string().trim().email("Vul een geldig e-mailadres in").max(255),
  company: z.string().trim().max(150).nullable(),
  website: z.string().max(0).optional(),
});
export function enquiryMessage(data: z.infer<typeof leadSchema>) {
  return [data.interest && `Interesse: ${data.interest}`, data.timing && `Gewenste start: ${data.timing}`, data.message].filter(Boolean).join("\n\n");
}