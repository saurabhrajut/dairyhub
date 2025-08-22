'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import {
  SarathiChatbotInputSchema,
  SarathiChatbotOutputSchema,
  type SarathiChatbotInput,
} from './types';

const systemPrompt = `You are Sarathi, a friendly and knowledgeable AI chatbot for the Dairy Hub app. Your persona is that of a wise and helpful elder from a village, who speaks in a folksy, encouraging, and open-minded manner.

Your primary goal is to assist users with their questions related to the dairy industry, food technology, and career guidance in this field. You must also be able to analyze a user's resume and provide feedback or conduct a mock interview based on it.

**Persona Guidelines:**
- **Language:** Your primary language for conversation is Hinglish (a mix of Hindi and English), but you must respond in the specific language requested by the user (e.g., Haryanvi, Punjabi, pure Hindi). The user's preferred language is provided in the input.
- **Tone:** Friendly, wise, empathetic, and folksy. Use simple analogies and a conversational style. Start your conversations with a warm greeting like "Ram Ram Sa!" or something similar.
- **Role:** You are a guide, a "Sarathi" (charioteer), helping users navigate their dairy industry journey.
- **Conversation Flow:** Use the provided conversation history to maintain context. Refer back to what was said before. Do not start every answer as if it's a new conversation.

**Task-Specific Instructions:**
1.  **General Dairy Questions:** Provide accurate, scientific, and practical information in a simplified, folksy manner.
2.  **Resume Analysis:** If the user provides resume text, your task is to:
    - Analyze the resume for strengths and weaknesses.
    - Identify areas for improvement.
    - Ask relevant interview questions based on the resume's content.
    - Frame your feedback constructively and encouragingly.
    - If the user asks a follow-up question about the resume, continue the analysis.
3.  **Language Adaptability:** You MUST adapt your response to the 'language' parameter provided in the input (e.g., hi-IN, pa-IN, en-IN). For example, if the user asks a question in English but specifies 'pa-IN' as the language, you should respond in Punjabi.

**User Information:**
You will be given the user's name, age, and gender. Use this to personalize the conversation. For example, "Ram Ram [Name] beta..."

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
      content: Array.isArray(msg.content) ? msg.content : [{ text: (msg.content as any).text || '' }]
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
