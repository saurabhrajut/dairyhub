
'use server';
/**
 * @fileOverview A flow to generate an expert response for a user's question.
 */

import { ai } from '@/ai/genkit';
import { AskExpertInputSchema, AskExpertOutputSchema, type AskExpertInput } from './types';


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
