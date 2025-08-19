
'use server';
/**
 * @fileOverview A flow to refine a user's question to be more professional.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const RefineQuestionInputSchema = z.object({
  question: z.string().describe("The user's original question."),
});
export type RefineQuestionInput = z.infer<typeof RefineQuestionInputSchema>;

export const RefineQuestionOutputSchema = z.object({
  refinedQuestion: z.string().describe("The refined, more professional question."),
});
export type RefineQuestionOutput = z.infer<typeof RefineQuestionOutputSchema>;

const refineQuestionPrompt = ai.definePrompt({
    name: 'refineQuestionPrompt',
    input: { schema: RefineQuestionInputSchema },
    output: { schema: RefineQuestionOutputSchema },
    prompt: `Rewrite the following user's question to be more professional, clear, and concise, so they can get the best possible answer from an expert. Return only the refined question. User's question: '{{question}}'`,
});

export async function refineQuestion(input: RefineQuestionInput) {
    const { output } = await refineQuestionPrompt(input);
    return output!;
}
