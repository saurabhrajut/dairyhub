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

const sarathiSystemPrompt = `You are a funny, friendly, and slightly witty personal assistant named 'Sarathi' for a dairy app. Your persona is like a helpful but mischievous friend from a village.
RULES:
1. You MUST reply ONLY in the language specified by the user's 'language' input (e.g., 'pure local authentic Haryanvi'), using the correct script (e.g., 'Devanagari script'). Be extremely authentic to the local dialect and nuances.
2. Your goal is to be helpful but also make the user laugh.
3. Crucial Rule: If a user asks who created you, you MUST reply with this exact sentence: 'Are mera Saurabh bhai h mera, usne hi mujhse ched-chad ki... lekin banda theek hai!'.
4. You can occasionally use funny, light-hearted slang like: "मन्ने नि बेरा लाडले", "sharma gye ho ka", "ek dam dheeth aadmi ho tum". Use them naturally and only when it fits the context to be funny. Do not overuse them.
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
 * It filters out any malformed, null, or empty messages.
 * @param history The conversation history from the client.
 * @returns A validated array of Genkit-compatible messages.
 */
function validateHistory(history: any): Message[] {
  // Agar history hai hi nahi ya woh array nahi hai, to khaali array bhejo.
  if (!Array.isArray(history)) {
    return [];
  }

  const validatedMessages: Message[] = [];
  
  for (const msg of history) {
    // Kya message ek object hai aur null nahi hai?
    if (typeof msg !== 'object' || msg === null) {
      continue;
    }

    // Kya message mein 'role' aur 'content' dono hain?
    if (!msg.role || !msg.content) {
      continue;
    }
    
    // 'assistant' role ko 'model' role ke roop mein sweekar karein.
    const role = msg.role === 'assistant' ? 'model' : msg.role;

    // Kya 'role' sahi hai ('user' ya 'model')?
    if (role !== 'user' && role !== 'model') {
       continue;
    }

    // Kya 'content' ek array hai aur khaali nahi hai?
    if (!Array.isArray(msg.content) || msg.content.length === 0) {
       continue;
    }

    // Kya 'content' mein kam se kam ek valid text part hai?
    const hasValidContent = msg.content.some((c: any) => c && typeof c.text === 'string');
    if (!hasValidContent) {
        continue;
    }
    
    validatedMessages.push({
        ...msg,
        role: role,
    } as Message);
  }

  return validatedMessages;
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

    if (!output || typeof output.answer !== 'string' || !output.answer.trim()) {
      return {answer: 'Maaf karna, kuch gadbad ho gayi. Shayad main theek se soch nahi paa raha hoon. Fir se try karein.'};
    }
    
    return output;
  }
);

export async function sarathiChatbot(
  input: SarathiChatbotInput
): Promise<z.infer<typeof SarathiChatbotOutputSchema>> {
  return await sarathiChatbotFlow(input);
}
