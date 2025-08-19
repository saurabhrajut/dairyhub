
'use server';
/**
 * @fileOverview A flow to generate an expert response for a given topic and question.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const GyanAIInputSchema = z.object({
  topic: z.string().describe("The topic of expertise (e.g., Dairy Technology, Food Safety)."),
  question: z.string().describe("The user's question."),
  language: z.string().describe("The language for the response (e.g., English, Hinglish)."),
});
export type GyanAIInput = z.infer<typeof GyanAIInputSchema>;

export const GyanAIOutputSchema = z.object({
  answer: z.string().describe("The AI-generated expert response."),
});
export type GyanAIOutput = z.infer<typeof GyanAIOutputSchema>;

const gyanAIPrompt = ai.definePrompt({
    name: 'gyanAIPrompt',
    input: { schema: GyanAIInputSchema },
    output: { schema: GyanAIOutputSchema },
    prompt: `Act as a PhD-level expert in {{topic}}. Provide a scientifically valid, professional, and well-structured answer in {{language}} for the following question. Start with a clear introduction, provide detailed points in the body, and end with a conclusion. Question: "{{question}}"`,
});

export async function gyanAI(input: GyanAIInput) {
  const { output } = await gyanAIPrompt(input);
  return output!;
}
