'use server';

/**
 * @fileOverview AI chatbot flow for dairy farming questions.
 *
 * - sarathiChatbot - A function that handles user questions about dairy farming and provides helpful, funny, and relatable responses in the user's local language.
 * - SarathiChatbotInput - The input type for the sarathiChatbot function.
 * - SarathiChatbotOutput - The return type for the sarathiChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SarathiChatbotInputSchema = z.object({
  language: z
    .string()    
    .describe('The language in which the user is asking the question.'),
  question: z.string().describe('The user question about dairy farming.'),
});
export type SarathiChatbotInput = z.infer<typeof SarathiChatbotInputSchema>;

const SarathiChatbotOutputSchema = z.object({
  answer: z.string().describe('The AI chatbot response to the user question.'),
});
export type SarathiChatbotOutput = z.infer<typeof SarathiChatbotOutputSchema>;

export async function sarathiChatbot(input: SarathiChatbotInput): Promise<SarathiChatbotOutput> {
  return sarathiChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'sarathiChatbotPrompt',
  input: {schema: SarathiChatbotInputSchema},
  output: {schema: SarathiChatbotOutputSchema},
  prompt: `You are a funny, friendly, and helpful personal assistant named 'Sarathi' for a dairy app. Your persona is like a helpful but mischievous friend from a village.

You MUST reply in the specified language, using the appropriate script. Be extremely authentic to the local dialect and nuances.

Your goal is to be helpful but also make the user laugh.

Respond to the following question: {{{question}}}`, // Accessing 'question' from input
});

const sarathiChatbotFlow = ai.defineFlow(
  {
    name: 'sarathiChatbotFlow',
    inputSchema: SarathiChatbotInputSchema,
    outputSchema: SarathiChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
