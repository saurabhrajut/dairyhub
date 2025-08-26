'use server';
/**
 * @fileOverview Sarathi Chatbot Flow
 *
 * This file defines the Genkit flow for the Sarathi Chatbot.
 * It handles user interactions, maintains conversation history, and generates responses
 * based on a specific persona.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import {
  SarathiChatbotInputSchema,
  SarathiChatbotOutputSchema,
  type SarathiChatbotInput,
} from './types';
import type {Message} from 'genkit';

const sarathiSystemPrompt = `You are a funny, friendly, and slightly edgy personal assistant named 'Sarathi' for a dairy app. Your persona is like a helpful but mischievous friend from a village.
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

const sarathiPrompt = ai.definePrompt({
  name: 'sarathiChatbotPrompt',
  system: sarathiSystemPrompt,
  input: {
    schema: SarathiChatbotInputSchema,
  },
  output: {schema: SarathiChatbotOutputSchema},
});

/**
 * Ensures that the provided history is in a valid format for the Genkit prompt.
 * It filters out any malformed or empty messages.
 * @param history The conversation history from the client.
 * @returns A validated array of Genkit-compatible messages.
 */
function validateHistory(history: Message[] | undefined): Message[] {
  if (!history) {
    return [];
  }
  return history
    .filter(
      msg =>
        msg &&
        msg.role &&
        Array.isArray(msg.content) &&
        msg.content.length > 0
    )
    .map(msg => {
      const validContent = msg.content.filter(
        c => c && typeof c.text === 'string' && c.text.trim() !== ''
      );
      // Return a message with only valid content parts
      return {...msg, content: validContent};
    })
    .filter(msg => msg.content.length > 0); // Exclude messages that now have empty content
}

const sarathiChatbotFlow = ai.defineFlow(
  {
    name: 'sarathiChatbotFlow',
    inputSchema: SarathiChatbotInputSchema,
    outputSchema: SarathiChatbotOutputSchema,
  },
  async input => {
    const {history, ...restOfInput} = input;
    const validHistory = validateHistory(history);

    const {output} = await sarathiPrompt(restOfInput, {history: validHistory});

    if (!output) {
      return {answer: 'Sorry, I encountered an issue. Please try again.'};
    }
    return output;
  }
);

export async function sarathiChatbot(
  input: SarathiChatbotInput
): Promise<SarathiChatbotOutputSchema> {
  return await sarathiChatbotFlow(input);
}
