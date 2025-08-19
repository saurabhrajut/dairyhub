
'use server';
/**
 * @fileOverview A flow to generate an expert response for a given topic and question.
 */

import { ai } from '@/ai/genkit';
import { GyanAIInputSchema, GyanAIOutputSchema, type GyanAIInput } from './types';


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
