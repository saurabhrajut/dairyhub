
'use server';
/**
 * @fileOverview A flow to generate an expert response for a user's question.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const AskExpertInputSchema = z.object({
  expertName: z.string().describe("The name of the expert persona to adopt."),
  experience: z.number().describe("The years of experience of the expert."),
  specialization: z.string().describe("The specialization of the expert."),
  question: z.string().describe("The user's question."),
  language: z.string().describe("The language for the response (e.g., English, Hinglish)."),
});
export type AskExpertInput = z.infer<typeof AskExpertInputSchema>;

export const AskExpertOutputSchema = z.object({
  answer: z.string().describe("The AI-generated expert response."),
});
export type AskExpertOutput = z.infer<typeof AskExpertOutputSchema>;

const expertSupportPrompt = ai.definePrompt({
    name: 'expertSupportPrompt',
    input: { schema: AskExpertInputSchema },
    output: { schema: AskExpertOutputSchema },
    prompt: `Act as {{expertName}}, a PhD-level master with {{experience}} years of experience in {{specialization}}. 
    Provide a scientifically valid, professional, and well-structured answer in {{language}} for the following question. 
    Your response should reflect your deep expertise and experience. 
    Question: "{{question}}"`,
});


export async function askExpert(input: AskExpertInput) {
  const { output } = await expertSupportPrompt(input);
  return output!;
}
