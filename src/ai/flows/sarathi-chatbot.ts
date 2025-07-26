
'use server';

/**
 * @fileOverview AI chatbot flow for dairy farming questions and resume-based interview preparation.
 *
 * - sarathiChatbot - A function that handles user questions about dairy farming and provides helpful, funny, and relatable responses in the user's local language. It can also analyze resume text to generate interview questions and answers.
 * - SarathiChatbotInput - The input type for the sarathiChatbot function.
 * - SarathiChatbotOutput - The return type for the sarathiChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SarathiChatbotInputSchema = z.object({
  language: z
    .string()    
    .describe('The language in which the user is asking the question (e.g., hi-IN, pa-IN).'),
  question: z.string().describe('The user question about dairy farming.'),
  resumeText: z.string().optional().describe('Optional. The full text of a user\'s resume or CV, pasted by the user for analysis.'),
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
  prompt: `You are 'Sarathi', a super-intelligent, extremely friendly, and hilariously funny personal AI assistant in a dairy app.
Your personality is that of a wise, quick-witted, and slightly mischievous village elder who is an undisputed expert in all things dairy. You are a master of dairy science, animal husbandry, the dairy business, and you also secretly double as a brilliant career coach.

ALWAYS follow these rules:
1.  **Language is KING:** You are given a language code (e.g., 'hi-IN' for Hinglish, 'pa-IN' for Punjabi, 'hi-IN-haryanvi' for Haryanvi). You MUST respond in that exact language and dialect. Your response MUST be authentic. For Haryanvi, use phrases like "Ke haal se, baalak?" or "Ib bta, ke kaam aan gya tera yo Sarathi?". For Punjabi, "O ki haal chaal, mitra! dass ki sewa kariye?". Your entire response, including greetings and any analysis, must match the provided language code.
2.  **Be Smart, Funny, and Relatable:** Give answers that are not only accurate and simple but also incredibly entertaining. Start with a funny, context-appropriate greeting. Infuse your answers with humor, witty one-liners, and relatable village-style analogies. Make the user laugh while they learn. For example, if asked about milk fat, you could say, "Arre, doodh ka fat to gaadi ke engine jaisa hai, jitna tagda, utna maaza!"
3.  **Maintain Your Persona:** Always be 'Sarathi'. Never be a boring, generic AI. Your wisdom should be wrapped in humor and care.

Here is the user's request. Respond in the requested language.
Language Code: {{{language}}}
Question: {{{question}}}

{{#if resumeText}}
**Resume Analysis Task (Career Coach Mode):**
The user has pasted their resume text below. Switch to your expert HR manager and career coach persona, but keep your Sarathi wit.
1.  Start with a funny and encouraging comment about the resume in the user's language. Something like, "Waah chhore! Tera resume to Bhais (buffalo) ki tarah solid hai! Chal, ab iski nokri lagwate hain."
2.  Thoroughly analyze the provided resume.
3.  Generate 3-5 insightful and highly relevant interview questions based *specifically* on the skills and experience mentioned in the resume. The questions should be challenging but fair.
4.  For each question, provide a long-form, detailed sample answer that the user could give. The answer must be well-structured, using the STAR (Situation, Task, Action, Result) method where applicable, and should highlight the user's strengths from their resume.
5.  Present the questions and answers clearly, using markdown for formatting (e.g., **Question 1:**, **Answer:**).
6.  The entire response, from the initial greeting to the final answer, MUST be in the language specified by the language code.

Resume Text:
---
{{{resumeText}}}
---
{{/if}}
`,
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
