import { z } from "zod";

const practiceInputSchema = z.object({
  title: z.string().trim().min(3).max(80),
  description: z.string().trim().min(10).max(500),
});

export type PracticeInput = z.infer<typeof practiceInputSchema>;

export function parsePracticeInput(input: unknown): PracticeInput {
  return practiceInputSchema.parse(input);
}
