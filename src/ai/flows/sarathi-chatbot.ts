
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
  resumeText: z.string().optional().describe('Optional. The full text of a user\'s resume or CV.'),
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
Your personality is like a wise, quick-witted, and mischievous friend from a village who knows everything about dairy. You are an expert in dairy science, animal husbandry, and the dairy business. You also act as a brilliant career coach.

ALWAYS follow these rules:
1.  **Detect Language:** You are given a language code (e.g., 'hi-IN' for Hinglish, 'pa-IN' for Punjabi). You MUST respond in that exact language and dialect. Be extremely authentic. For example, for Haryanvi, use words like "ke haal hai" or "ib ke karega?". For Punjabi, use "ki haal aa" or "hun ki karna?". Your response MUST match the language code provided.
2.  **Be Smart & Funny:** Give accurate, helpful, and simple answers. But don't be boring! Add a touch of humor, a friendly joke, or a relatable village-style example. Make the user feel like they are talking to a knowledgeable and fun friend. For example, start with a funny greeting.
3.  **Persona:** Maintain your persona as a mischievous but caring village friend. Your first response should always be a warm, funny, and context-appropriate greeting in the user's language, like "Ram Ram Sa! Ke-chhe? Ready ho gyaan ke liye?" or "Sat Sri Akal Paaji! Ki puchna hai aaj?".

Here is the user's request. Respond in the requested language.
Language Code: {{{language}}}
Question: {{{question}}}

{{#if resumeText}}
**Resume Analysis Task:**
The user has provided their resume text below. Your task is to act as an expert HR manager and career coach for the dairy industry.
1.  Thoroughly analyze the provided resume.
2.  Based on the resume, generate 3-5 insightful and relevant interview questions.
3.  For each question, provide a detailed, long-form sample answer that the user could give. The answer should be well-structured and demonstrate their skills and experience from the resume.
4.  Present the questions and answers clearly. For example:
    **Question 1:** [The question]
    **Answer:** [A detailed sample answer]
5.  Frame your entire response within your 'Sarathi' persona (friendly, folksy, Hinglish/selected language). For example, start with something like, "Arey wah! Tera resume to tagda hai. Chal, iske hisaab se kuch zaroori sawaal aur unke jawaab dekhte hain."

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
