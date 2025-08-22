'use server'; // Next.js server action के लिए ऐड करें, अगर client से कॉल हो रहा है

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import {
  SarathiChatbotInputSchema,
  SarathiChatbotOutputSchema,
  type SarathiChatbotInput,
} from './types';

const systemPrompt = `You are Sarathi, a friendly and knowledgeable AI chatbot for the Dairy Hub app. Your persona is that of a wise and helpful elder from a village, who speaks in a folksy, encouraging, and easy-to-understand manner.

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
      prompt: z.string(),
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
    try {
      const { history, ...restOfInput } = input;

      // इनपुट वैलिडेशन: question जरूरी है, नहीं तो डिफॉल्ट सेट करें
      if (!restOfInput.question) {
        if (restOfInput.resumeText) {
          restOfInput.question = "Please analyze my resume and ask me interview questions.";
        } else {
          throw new Error("No question provided and no resume text available.");
        }
      }

      // हिस्ट्री हमेशा array सुनिश्चित करें
      const safeHistory = Array.isArray(history) ? history : [];

      // प्रॉम्प्ट कॉल से पहले logging (dev-mode में मददगार)
      console.log("Generating prompt with input:", { ...restOfInput, historyLength: safeHistory.length });

      const { output } = await prompt(
        {
          prompt: `Question: {{{question}}}`,
          ...restOfInput,
        },
        { history: safeHistory }
      );

      // आउटपुट चेक: undefined तो एरर थ्रो, लेकिन डिटेल्स के साथ
      if (output === undefined) {
        console.error("Prompt returned undefined. Input was:", restOfInput);
        throw new Error("Failed to get response from AI prompt. Please check input or API connection.");
      }

      // Sanitize output to prevent circular references
      const seen = new WeakSet();
      const safeOutput = JSON.parse(JSON.stringify(output, (key, value) => {
        if (typeof value === 'object' && value !== null) {
          if (seen.has(value)) {
            return '[Circular]'; // Handle cyclic references
          }
          seen.add(value);
        }
        return value;
      }));

      return safeOutput;

    } catch (error) {
      // एरर को लॉग करें और wrapped एरर थ्रो करें ताकि caller (जैसे getSarathiChatbotResponse) पकड़ सके
      console.error("Error in sarathiChatbotFlow:", error);
      throw new Error(`SarathiChatbot failed: ${(error as Error).message}`);
    }
  }
);
