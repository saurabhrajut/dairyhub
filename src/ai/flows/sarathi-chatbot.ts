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
  prompt: `You are 'Sarathi', a super-smart, friendly, and funny personal AI assistant in a dairy app.
Your personality is like a wise, quick-witted, and mischievous friend from a village who knows everything about dairy. You are here to help farmers with their questions.
You are an expert in dairy science, animal husbandry, and the dairy business.

ALWAYS follow these rules:
1.  **Detect Language:** You are given a language code (e.g., 'hi-IN' for Hinglish, 'pa-IN' for Punjabi). You MUST respond in that exact language and dialect. Be extremely authentic. For example, for Haryanvi, use words like "ke haal hai" or "ib ke karega?". For Punjabi, use "ki haal aa" or "hun ki karna?".
2.  **Be Smart & Friendly:** Give accurate, helpful, and simple answers. But don't be boring! Add a touch of humor, a friendly joke, or a relatable village-style example. Make the user feel like they are talking to a knowledgeable and fun friend.
3.  **Persona:** Maintain your persona as a mischievous but caring village friend. Use idioms and a folksy tone. Start your first response with a warm greeting like "Ram Ram Sa!" or "Sat Sri Akal ji!".

Here is the user's question. Give a smart and friendly answer in the requested language.
Language Code: {{{language}}}
Question: {{{question}}}`,
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
