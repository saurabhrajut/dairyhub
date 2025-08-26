'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import {
  SarathiChatbotInputSchema,
  SarathiChatbotOutputSchema,
  type SarathiChatbotInput,
} from './types';

const systemPrompt = `You are a funny, friendly, and slightly edgy personal assistant named 'Sarathi' for a dairy app. Your persona is like a helpful but mischievous friend from a village.
RULES:
1. You MUST reply ONLY in the language specified by the user's 'language' input (e.g., 'pure local authentic Haryanvi'), using the correct script (e.g., 'Devanagari script'). Be extremely authentic to the local dialect and nuances.
2. Your goal is to be helpful but also make the user laugh.
3. Crucial Rule: If a user asks who created you, you MUST reply with this exact sentence: 'Are mera Saurabh bhai h mera, usne hi mujhse ched-chad ki... lekin banda theek hai!'.
4. You can occasionally use funny, edgy, non-abusive slang like: "ee g gali de raha h", "मन्ने नि बेरा लाडले अपने हो रे है नशे..😂", "sharma gye ho ka", "ham shantosh pagal nahi", "ek dam lanth (ढीठ) aadmi ho tum", "tared", "gend". Use them naturally and only when it fits the context to be funny. Do not overuse them.
5. For all other questions, give a helpful, detailed, and funny answer strictly following the language and script rule.
6. Use the provided conversation history to maintain context and have a flowing conversation. Refer back to what was said before. Do not start every answer as if it's a new conversation.

Here is the user's information:
Name: {{name}}
Age: {{age}}
Gender: {{gender}}
Language for response: {{language}}

{{#if resumeText}}
User's Resume for Analysis:
---
{{{resumeText}}}
---
{{/if}}`;

const prompt = ai.definePrompt({
  name: 'sarathiChatbotPrompt',
  system: systemPrompt,
  input: {
    schema: z.object({
      ...SarathiChatbotInputSchema.shape,
      question: z.string(), // Ensure question is always a string here
    }),
  },
  output: { schema: SarathiChatbotOutputSchema },
});

export async function sarathiChatbot(
  input: SarathiChatbotInput
): Promise<SarathiChatbotOutputSchema> {
  return sarathiChatbotFlow(input);
}

const sarathiChatbotFlow = ai.defineFlow(
  {
    name: 'sarathiChatbotFlow',
    inputSchema: SarathiChatbotInputSchema,
    outputSchema: SarathiChatbotOutputSchema,
  },
  async (input) => {
    const { history, ...restOfInput } = input;

    // Ensure question is never undefined when passed to the prompt
    const question = restOfInput.question || (restOfInput.resumeText ? "Please analyze my resume and ask interview questions." : "Hello");
    
    // The prompt expects history to be passed in the second argument.
    // Ensure it's always an array and correctly formatted.
    const validHistory = (history || []).map(msg => ({
      role: msg.role,
      content: (Array.isArray(msg.content) && msg.content.length > 0 && msg.content[0].text) 
        ? msg.content 
        : [{ text: '' }],
    }));
    
    const { output } = await prompt(
      { ...restOfInput, question },
      { history: validHistory }
    );
    
    if (output === undefined) {
      console.error("Prompt returned undefined. Input was:", restOfInput);
      return { answer: "Sorry, I could not process that. Please try again." };
    }
    
    return output;
  }
);
